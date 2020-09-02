import theme from '@chakra-ui/theme'

const storiesTheme = {
	...theme,
	colors: {
		...theme.colors,
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
            600: '#757575',
            700: '#616161',
            800: '#323232',
            900: '#212121',
		},
	},
}

export default storiesTheme
