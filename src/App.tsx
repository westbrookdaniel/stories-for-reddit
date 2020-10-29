import React, { Suspense, lazy, FunctionComponent } from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Box, Spinner } from '@chakra-ui/core'
import { AnimatePresence, motion } from 'framer-motion'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const Home = lazy(() => import('./Home'))
const Stories = lazy(() => import('./Stories'))
const Subreddits = lazy(() => import('./Subreddits'))
const About = lazy(() => import('./About'))
const SingleStory = lazy(() => import('./SingleStory'))
const Profile = lazy(() => import('./Profile'))
const AnySubreddits = lazy(() => import('./AnySubreddits'))
const Login = lazy(() => import('./account/Login'))
const SignUp = lazy(() => import('./account/SignUp'))
const ForgotPassword = lazy(() => import('./account/ForgotPassword'))
const Update = lazy(() => import('./account/Update'))

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
				<MotionBox
					flexGrow={1}
					display="flex"
					flexDir="column"
					key={location.pathname}
				>
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
						<Susp>
							<Switch location={location}>
								<Route exact path="/">
									<Home />
								</Route>
								<Route path="/stories/:id">
									<SingleStory />
								</Route>
								<Route path="/subreddits/:id">
									<AnySubreddits />
								</Route>
								<Route exact path="/stories">
									<Stories />
								</Route>
								<Route exact path="/about">
									<About />
								</Route>
								<Route exact path="/subreddits">
									<Subreddits />
								</Route>
								<Route exact path="/profile">
									<Profile />
								</Route>
								<Route exact path="/login">
									<Login />
								</Route>
								<Route exact path="/signup">
									<SignUp />
								</Route>
								<Route exact path="/forgotpassword">
									<ForgotPassword />
								</Route>
								<Route exact path="/update">
									<Update />
								</Route>
							</Switch>
						</Susp>
					</MotionBox>
				</MotionBox>
			</AnimatePresence>
			<Footer />
		</Box>
	)
}

const Susp: FunctionComponent = ({ children }) => {
	return (
		<Suspense
			fallback={
				<div className="suspense-spinner">
					<Spinner color="primary.500" />
				</div>
			}
		>
			{children}
		</Suspense>
	)
}

export default hot(App)
