import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './Home'
import StyleGuide from './StyleGuide'
import { Box } from '@chakra-ui/core'

const App = () => {
	return (
		<Router>
			<Box d="flex" flexDir="column">
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/style-guide">
						<StyleGuide />
					</Route>
				</Switch>
				<Footer />
			</Box>
		</Router>
	)
}

export default hot(App)
