import React, { useContext, useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import SectionContainer from './components/layout/SectionContainer'
import {
	Box,
	Heading,
	Text,
	useColorMode,
	VStack,
	HStack,
	Avatar,
	useToast,
} from '@chakra-ui/core'
import DefaultButton from './components/util/DefaultButton'
import { Link, useHistory } from 'react-router-dom'
import CardRow from './components/layout/CardRow'
import { AuthContext } from './AuthContext'
import { firebase, reddit } from './api'
import { AnyObject } from './types'
import { AnimatePresence, motion } from 'framer-motion'
import { useListWithoutFilter } from './components/pages/List/useList'
import { fadeAnimation } from './components/util/animations'
import { mapFromPosts } from './components/pages/List/mapFromPosts'
import { SkeletonCards } from './components/util/Skeletons'

export default function Profile() {
	const history = useHistory()
	const { colorMode } = useColorMode()
	const { currentUser } = useContext(AuthContext)
	const [loading, setLoading] = useState<boolean>(false)
	const [userData, setUserData] = useState<AnyObject | null>(null)

	const [stories, setStories] = useState<any[] | null>(null)
	const [subreddits, setSubreddits] = useState<any[] | null>(null)

	const toast = useToast()

	const handleLogOut = async () => {
		try {
			setLoading(true)
			const res = await firebase.logout()
			toast({
				position: 'bottom-left',
				title: res,
				status: 'success',
				duration: 3000,
				isClosable: true,
			})
			setLoading(false)
		} catch (error) {
			setLoading(false)
			toast({
				position: 'bottom-left',
				title: error,
				status: 'error',
				duration: 3000,
				isClosable: true,
			})
		}
	}

	useEffect(() => {
		if (currentUser === null) {
			history.push('/login')
		} else if (currentUser) {
			firebase
				.getUser(currentUser.uid)
				.then(({ data }) => {
					setUserData(data)
				})
				.catch((error) => {
					toast({
						position: 'bottom-left',
						title: error,
						status: 'error',
						duration: 3000,
						isClosable: true,
					})
				})
		}
	}, [currentUser])

	useEffect(() => {
		if (userData?.stories) {
			getStories(userData?.stories)
		}
		if (userData?.subreddits) {
			getSubreddits(userData?.subreddits)
		}
	}, [userData])

	const getStories = async (idArr: any[]) => {
		try {
			setStories(await reddit.getStoriesFromList(idArr))
		} catch (error) {
			toast({
				position: 'bottom-left',
				title: 'Problem getting user stories',
				status: 'error',
				duration: 3000,
				isClosable: true,
			})
		}
	}
	const { firstLoaded: loadedStories } = useListWithoutFilter(stories)

	const getSubreddits = async (idArr: any[]) => {
		try {
			setSubreddits(await reddit.getSubredditsFromList(idArr))
		} catch (error) {
			toast({
				position: 'bottom-left',
				title: 'Problem getting user subreddits',
				status: 'error',
				duration: 3000,
				isClosable: true,
			})
		}
	}
	const { firstLoaded: loadedSubreddits } = useListWithoutFilter(subreddits)

	return (
		<>
			<Helmet>
				<title>Profile | Stories For Reddit</title>
			</Helmet>
			<SectionContainer py={12}>
				<Box maxW="sm">
					<Avatar
						size="2xl"
						mb={8}
						name="Dan Abrahmov"
						src="https://bit.ly/dan-abramov"
					/>
					<Heading as="h1" fontSize="4em" mb={3}>
						My Profile
					</Heading>
					<Text mb={6} color={colorMode === 'dark' ? 'gray.500' : 'gray.700'}>
						Email: {currentUser ? currentUser?.email : 'Loading...'}
					</Text>
					<HStack spacing={6} pt={3}>
						<Link to="/update">
							<DefaultButton mb={6}>Update Details</DefaultButton>
						</Link>
						<DefaultButton
							isLoading={loading}
							onClick={handleLogOut}
							colorScheme="tan"
							mb={6}
						>
							Log Out
						</DefaultButton>
					</HStack>
				</Box>
			</SectionContainer>
			<SectionContainer maxW="7xl" mb={16}>
				<VStack spacing={10}>
					<CardRow title="Saved Stories" w="100%">
						<AnimatePresence exitBeforeEnter>
							{loadedStories ? (
								<motion.div id="1" {...fadeAnimation}>
									<HStack spacing={6}>
										{mapFromPosts(stories, 'No Saved Stories')}
									</HStack>
								</motion.div>
							) : (
								<HStack spacing={6}>
									{SkeletonCards({
										quanitity: 4,
										motionProps: fadeAnimation,
									})}
								</HStack>
							)}
						</AnimatePresence>
					</CardRow>
					<CardRow title="Favourited Subreddits" w="100%">
						<AnimatePresence exitBeforeEnter>
							{loadedSubreddits ? (
								<motion.div id="1" {...fadeAnimation}>
									<HStack spacing={6}>
										{mapFromPosts(subreddits, 'No Favourited Subreddits')}
									</HStack>
								</motion.div>
							) : (
								<HStack spacing={6}>
									{SkeletonCards({ quanitity: 4, motionProps: fadeAnimation })}
								</HStack>
							)}
						</AnimatePresence>
					</CardRow>
				</VStack>
			</SectionContainer>
		</>
	)
}
