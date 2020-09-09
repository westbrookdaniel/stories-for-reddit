import CSSReset from '@chakra-ui/css-reset'
import { PortalManager } from '@chakra-ui/portal'
import {
	ThemeProvider,
	GlobalStyle,
} from '@chakra-ui/system'
import { ColorModeProvider } from './ColorProvider'
import defaultTheme from '@chakra-ui/theme'
import { merge } from '@chakra-ui/utils'
import * as React from 'react'

interface Props {
	children: any
	resetCSS?: any
	portalZIndex?: any
	theme: any
}

export const CustomProvider = ({
	children,
	resetCSS,
	portalZIndex,
	theme = defaultTheme,
}: Props) => {
	return (
		<ThemeProvider theme={theme}>
			<ColorModeProvider>
				{resetCSS ? <CSSReset /> : null}
				<GlobalStyle />
				{portalZIndex ? (
					<PortalManager zIndex={portalZIndex}>{children}</PortalManager>
				) : (
					children
				)}
			</ColorModeProvider>
		</ThemeProvider>
	)
}

export function extendTheme(overrides: any) {
	return merge(defaultTheme, overrides)
}
