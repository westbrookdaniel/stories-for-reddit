import { extendTheme } from '@chakra-ui/core'
import { mode } from '@chakra-ui/theme-tools'

import { theme as ogTheme } from '@chakra-ui/theme'
console.log(ogTheme.components)

const theme = extendTheme({
	fonts: {
		body: ['sans-serif', 'Lato'],
		heading: ['sans-serif', 'Lora'],
	},
	colors: {
		primary: {
			50: '#f6eeee',
			100: '#e5cdcd',
			200: '#d4abab',
			300: '#c28989',
			400: '#b16868',
			500: '#974e4e',
			600: '#763d3d',
			700: '#542b2b',
			800: '#321a1a',
			900: '#110909',
		},
		gray: {
			50: '#fafafa',
			100: '#f5f5f5',
			200: '#eeeeee',
			300: '#e0e0e0',
			400: '#bdbdbd',
			500: '#9e9e9e',
			600: '#656565',
			700: '#515151',
			750: '#303030',
			800: '#212121',
			900: '#191919',
		},
	},
	components: {
		Input: {
			baseStyle: ({ colorMode }) => ({
				field: {
					'&::placeholder': {
						color: colorMode === 'dark' ? 'gray.100' : 'gray.800',
					},
				},
			}),
		},
	},
})

export default theme
