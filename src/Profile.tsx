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
import { firebase } from './api'

export default function Profile() {
	const history = useHistory()
	const { colorMode } = useColorMode()
	const { currentUser } = useContext(AuthContext)
	const [loading, setLoading] = useState<boolean>(false)
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
		}
	}, [currentUser])

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
						<DefaultButton onClick={handleLogOut} colorScheme="tan" mb={6}>
							Log Out
						</DefaultButton>
					</HStack>
				</Box>
			</SectionContainer>
			<SectionContainer maxW="7xl" mb={16}>
				<VStack spacing={10}>
					<CardRow title="Favourited Subreddits" w="100%" />
					<CardRow title="Saved Stories" w="100%" />
				</VStack>
			</SectionContainer>
		</>
	)
}
