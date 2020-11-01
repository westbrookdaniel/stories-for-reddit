import React, { Suspense, lazy, FunctionComponent, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Box, Spinner } from '@chakra-ui/core'
import { AnimatePresence, motion } from 'framer-motion'
import { Susp } from './components/util/Susp'

const Header = lazy(() => import('./components/layout/Header'))
const Footer = lazy(() => import('./components/layout/Footer'))

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

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			})
		}, 100)
	}, [location.key])

	return (
		<div className="wrapper-box">
			<Susp>
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
							display="flex"
							flexDir="column"
							flexGrow={1}
						>
							<Susp>
								<Switch location={location}>
									<Route exact path="/" component={Home} />
									<Route path="/stories/:id" component={SingleStory} />
									<Route path="/subreddits/:id" component={AnySubreddits} />
									<Route exact path="/stories" component={Stories} />
									<Route exact path="/about" component={About} />
									<Route exact path="/subreddits" component={Subreddits} />
									<Route exact path="/profile" component={Profile} />
									<Route exact path="/login" component={Login} />
									<Route exact path="/signup" component={SignUp} />
									<Route
										exact
										path="/forgotpassword"
										component={ForgotPassword}
									/>
									<Route exact path="/update" component={Update} />
								</Switch>
							</Susp>
						</MotionBox>
					</MotionBox>
				</AnimatePresence>
				<Footer />
			</Susp>
		</div>
	)
}
export default hot(App)
