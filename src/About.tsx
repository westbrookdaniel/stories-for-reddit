import React from 'react'

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
	Link as StyleLink,
} from '@chakra-ui/core'
import DefaultButton from './components/util/DefaultButton'
import { Link } from 'react-router-dom'

export default function About() {
	const { colorMode } = useColorMode()

	return (
		<>
			<Helmet>
				<title>About | Stories For Reddit</title>
			</Helmet>
			<Hero />
			<SectionContainer bg={colorMode === 'dark' ? 'tan.950' : 'tan.400'}>
				<SimpleGrid columns={[1, 1, 1, 2]} gap={10} w="100%" pt={12} pb={20}>
					<Box>
						<Heading as="h2" fontSize="2em" mb={6}>
							Contact Me
						</Heading>
						<Text mb={6} color={colorMode === 'dark' ? 'gray.500' : 'gray.700'}>
							I am the sole develeper behind Stories for Reddit and it was
							created to solve my own problem of wanting a better experience for
							discovering and reading short stories. Stay tuned for more
							features comming soon, or request new features by letting me know.
						</Text>
						<StyleLink isExternal href="https://westbrookdaniel.com/">
							<DefaultButton>Visit My Website</DefaultButton>
						</StyleLink>
					</Box>
					<Box>
						<Heading as="h2" fontSize="2em" mb={6}>
							Get Started
						</Heading>
						<Text mb={6} color={colorMode === 'dark' ? 'gray.500' : 'gray.700'}>
						Discover your next favourite short story today. Sign up for the ability to
							save subreddits and stories. Start discovering the latest stories or explore the many writing
							focused communities of Reddit now.
						</Text>
						<VStack alignItems="flex-start" spacing={4}>
							<Link to="/subreddits">
								<DefaultButton>Explore Subreddits</DefaultButton>
							</Link>
							<Link to="/stories">
								<DefaultButton>Discover Stories</DefaultButton>
							</Link>
						</VStack>
					</Box>
				</SimpleGrid>
			</SectionContainer>
		</>
	)
}
