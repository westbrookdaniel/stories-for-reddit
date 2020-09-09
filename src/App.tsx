import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/layout/Header'

import Home from './Home'
import StyleGuide from './StyleGuide'
import { VStack } from '@chakra-ui/core'

const App = () => {
	return (
		<Router>
			<VStack p={10} spacing={10}>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/style-guide">
						<StyleGuide />
					</Route>
				</Switch>
			</VStack>
		</Router>
	)
}

export default hot(App)
