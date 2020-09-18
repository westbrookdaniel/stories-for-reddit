import React from 'react'
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
				<MotionBox flexGrow={1} key={location.pathname}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { delay: 0.1 } }}
						exit={{ opacity: 0 }}
						transition={{ ease: 'easeInOut', duration: '0.1' }}
						onAnimationStart={ScrollAfterDelay}
					>
						<Switch location={location}>
							<Route exact path="/" component={Home} />
							<Route exact path="/stories" component={Stories} />
							<Route path="/story/:id" component={SingleStory} />
							<Route exact path="/about" component={About} />
							<Route exact path="/subreddits" component={Subreddits} />
							<Route exact path="/style-guide" component={StyleGuide} />
						</Switch>
					</motion.div>
				</MotionBox>
			</AnimatePresence>
			{location.pathname.startsWith('/story/') ? null : <Footer />}
		</Box>
	)
}

export default hot(App)
