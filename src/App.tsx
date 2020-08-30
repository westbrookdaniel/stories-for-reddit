import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import { Heading, VStack, Code, positionParser } from '@chakra-ui/core'
import { Helmet } from 'react-helmet'
import { FcHome, FcAbout } from 'react-icons/fc'
import { motion } from 'framer-motion'

import api from './api'
import { Posts } from './types'

const App = () => {
	const [posts, setPosts] = useState<Posts[]>()

	useEffect(() => {
		callApi()
	}, [])

	const callApi = async () => {
		const data = await api.getPosts()
		setPosts(data)
	}

	return (
		<Router>
			<VStack p={10} spacing={10}>
				<Header />
				<Switch>
					<Route exact path="/">
						<Helmet>
							<title>Stories For Reddit | Online Reader</title>
						</Helmet>
						<Heading>
							<FcHome style={{ display: 'inline-block ' }} /> Hello World
						</Heading>
						{posts ? (
							<motion.pre
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								style={{ maxWidth: '100%', fontSize: '0.7rem' }}
							>
								{JSON.stringify(posts, null, 2)}
							</motion.pre>
						) : null}
					</Route>
					<Route path="/about">
						<Helmet>
							<title>About | Stories For Reddit</title>
						</Helmet>
						<Heading>
							<FcAbout style={{ display: 'inline-block ' }} /> About
						</Heading>
					</Route>
				</Switch>
			</VStack>
		</Router>
	)
}

export default hot(App)
