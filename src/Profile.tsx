import React, { useContext, useEffect } from 'react'

import { Helmet } from 'react-helmet'
import Hero from './components/pages/About/Hero'
import SectionContainer from './components/layout/SectionContainer'
import {
	SimpleGrid,
	Box,
	Heading,
	Text,
	useColorMode,
	VStack,
	HStack,
	Avatar,
} from '@chakra-ui/core'
import { PageContext, PageStateProps } from './PageProvider'
import DefaultButton from './components/util/DefaultButton'
import { Link } from 'react-router-dom'
import CardRow from './components/layout/CardRow'

export default function Profile() {
	const {
		page: [, setPageState],
	}: PageStateProps = useContext(PageContext)

	useEffect(() => {
		setPageState('default')
	}, [])

	const { colorMode } = useColorMode()

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
					<Heading as="h1" fontSize="4em" mb={6}>
						My Profile
					</Heading>
					<Text mb={6} color={colorMode === 'dark' ? 'gray.500' : 'gray.700'}>
						Username: johnsmith <br />
						Email: example@email.com <br />
						Password: **********
					</Text>
					<HStack spacing={6} pt={3}>
						<Link to="/stories">
							<DefaultButton mb={6}>Discover Stories </DefaultButton>
						</Link>
						<Link to="/stories">
							<DefaultButton colorScheme="tan" mb={6}>
								Discover Stories
							</DefaultButton>
						</Link>
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
