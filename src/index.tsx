import React, { lazy } from 'react'
import ReactDOM from 'react-dom'
const App = lazy(() => import('./App'))
import { BrowserRouter as Router } from 'react-router-dom'

const ChakraProvider = lazy(() =>
	import('@chakra-ui/core').then((module) => ({
		default: module.ChakraProvider,
	}))
)
import theme from '../theme'
import './index.css'
const AuthProvider = lazy(() => import('./AuthContext'))
import { Susp } from './components/util/Susp'

function Index() {
	return (
		<Susp>
			<ChakraProvider resetCSS theme={theme}>
				<AuthProvider>
					<Router>
						<App />
					</Router>
				</AuthProvider>
			</ChakraProvider>
		</Susp>
	)
}

var mountNode = document.getElementById('app')
ReactDOM.render(<Index />, mountNode)
