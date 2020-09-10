import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/core'
import theme from '../theme'

function Index() {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Router>
				<App />
			</Router>
		</ChakraProvider>
	)
}

var mountNode = document.getElementById('app')
ReactDOM.render(<Index />, mountNode)
