var _document

import { noop, __DEV__, isBrowser } from '@chakra-ui/utils'
import * as React from 'react'
import { useSafeLayoutEffect } from '@chakra-ui/hooks'
export var ColorModeContext = /*#__PURE__*/ React.createContext({})

if (__DEV__) {
	ColorModeContext.displayName = 'ColorModeContext'
}

var classNames = {
	light: 'chakra-ui-light',
	dark: 'chakra-ui-dark',
}
export var useColorMode = () => React.useContext(ColorModeContext)
var ssrBody = {
	classList: {
		add: () => {},
		remove: () => {},
	},
}
var body = isBrowser
	? (_document = document) == null
		? void 0
		: _document.body
	: ssrBody
export var ColorModeProvider = (props) => {
	var { children } = props
	var [colorMode, rawSetColorMode] = React.useState()
	useSafeLayoutEffect(() => {
		var root = document.documentElement
		var mode = root.style.getPropertyValue('--chakra-ui-color-mode')
		rawSetColorMode(mode)
	}, [])
	useSafeLayoutEffect(() => {
		var dark = colorMode === 'dark'
		body.classList.add(dark ? classNames.dark : classNames.light)
		body.classList.remove(dark ? classNames.light : classNames.dark)
	}, [colorMode])
	var ctx = React.useMemo(() => {
		var setColorMode = (mode) => {
			var root = document.documentElement
			root.style.setProperty('--chakra-ui-color-mode', mode)
			localStorage.setItem('chakra-ui-color-mode', mode)
			rawSetColorMode(mode)
		}

		var toggleColorMode = () => {
			setColorMode(colorMode === 'light' ? 'dark' : 'light')
		}

		return {
			colorMode: colorMode,
			setColorMode,
			toggleColorMode,
		}
	}, [colorMode, rawSetColorMode])
	var mounted = React.useRef(false)
	React.useEffect(() => {
		if (!window.hasOwnProperty('matchMedia')) return
		var mq = window.matchMedia('(prefers-color-scheme: dark)')

		var listener = () => {
			if (mounted.current) {
				ctx.setColorMode(!!mq.matches ? 'dark' : 'light')
			}

			mounted.current = true
		}

		listener()
		mq.addListener(listener)
		return () => {
			mq.removeListener(listener)
		} // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return /*#__PURE__*/ React.createElement(ColorModeContext.Provider, {
		value: ctx,
		children: children,
	})
}

if (__DEV__) {
	ColorModeProvider.displayName = 'ColorModeProvider'
}

export var DarkMode = (_ref) => {
	var { children } = _ref
	return /*#__PURE__*/ React.createElement(ColorModeContext.Provider, {
		value: {
			colorMode: 'dark',
			toggleColorMode: noop,
			setColorMode: noop,
		},
		children: children,
	})
}

if (__DEV__) {
	DarkMode.displayName = 'DarkMode'
}

export var LightMode = (_ref2) => {
	var { children } = _ref2
	return /*#__PURE__*/ React.createElement(ColorModeContext.Provider, {
		value: {
			colorMode: 'light',
			toggleColorMode: noop,
			setColorMode: noop,
		},
		children: children,
	})
}

if (__DEV__) {
	LightMode.displayName = 'LightMode'
}
/**
 * Change value based on color mode.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 *
 * @example
 *
 * ```js
 * const Icon = useColorModeValue(MoonIcon, SunIcon)
 * ```
 */

export function useColorModeValue(light, dark) {
	var { colorMode } = useColorMode()
	return colorMode === 'dark' ? dark : light
}
//# sourceMappingURL=color-mode-provider.js.map
