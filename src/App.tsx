import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import { Heading, VStack, Code, positionParser, Button } from '@chakra-ui/core'
import { Helmet } from 'react-helmet'
import { FcAbout } from 'react-icons/fc'
import { Posts } from './types'

import { placeholder, firebase } from './api'

import Home from './Home'
import StyleGuide from './StyleGuide'

const App = () => {
	const [posts, setPosts] = useState<Posts[]>()

	useEffect(() => {
		callp()
		callf()
	}, [])

	const callf = async () => {
		const fdata = await firebase.get('users')
		console.log(fdata)
	}
	const callp = async () => {
		const pdata = await placeholder.getPosts()
		setPosts(pdata)
	}

	return (
		<Router>
			<VStack p={10} spacing={10}>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home posts={posts} />
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
