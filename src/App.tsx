import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './Home'
import StyleGuide from './StyleGuide'
import { Box } from '@chakra-ui/core'
import Stories from './Stories'
import { AnimatePresence, motion } from 'framer-motion'
import Subreddits from './Subreddits'
import About from './About'
import SingleStory from './SingleStory'
import Profile from './Profile'
import AnySubreddits from './AnySubreddits'
import Login from './account/Login'
import SignUp from './account/SignUp'
import ForgotPassword from './account/ForgotPassword'
import Update from './account/Update'

const MotionBox = motion.custom(Box)

const App = () => {
	const location = useLocation()

	const ScrollAfterDelay = () => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			})
		}, 100)
	}

	return (
		<Box d="flex" minH="100vh" flexDir="column" overflow="hidden">
			<Header />
			<AnimatePresence exitBeforeEnter>
				<MotionBox flexGrow={1} display="flex" flexDir="column" key={location.pathname}>
					<MotionBox
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { delay: 0.1 } }}
						exit={{ opacity: 0 }}
						transition={{ ease: 'easeInOut', duration: '0.1' }}
						onAnimationStart={ScrollAfterDelay}
						display="flex"
						flexDir="column"
						flexGrow={1}
					>
						<Switch location={location}>
							<Route exact path="/" component={Home} />
							<Route path="/stories/:id" component={SingleStory} />
							<Route path="/subreddits/:id" component={AnySubreddits} />
							<Route exact path="/stories" component={Stories} />
							<Route exact path="/about" component={About} />
							<Route exact path="/subreddits" component={Subreddits} />
							<Route exact path="/style-guide" component={StyleGuide} />
							<Route exact path="/profile" component={Profile} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/signup" component={SignUp} />
							<Route exact path="/forgotpassword" component={ForgotPassword} />
							<Route exact path="/update" component={Update} />
						</Switch>
					</MotionBox>
				</MotionBox>
			</AnimatePresence>
			<Footer />
		</Box>
	)
}

export default hot(App)
