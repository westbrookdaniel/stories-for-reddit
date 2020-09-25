import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/core'
import theme from '../theme'
import { PageProvider } from './PageProvider'

import './index.css'

function Index() {
	return (
		<PageProvider>
			<ChakraProvider resetCSS theme={theme}>
				<Router>
					<App />
				</Router>
			</ChakraProvider>
		</PageProvider>
	)
}

var mountNode = document.getElementById('app')
ReactDOM.render(<Index />, mountNode)
