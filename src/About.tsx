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
} from '@chakra-ui/core'
import { PageContext, PageStateProps } from './PageProvider'
import DefaultButton from './components/util/DefaultButton'

export default function About() {
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
				<title>About | Stories For Reddit</title>
			</Helmet>
			<Hero />
			<SectionContainer
				bg={colorMode === 'dark' ? 'tan.950' : 'tan.400'}
			>
				<SimpleGrid columns={[1, 1, 1, 2]} gap={10} w="100%" pt={12} pb={20}>
					<Box>
						<Heading as="h2" fontSize="2em" mb={6}>
							Contact Me
						</Heading>
						<Text mb={6} color={colorMode === 'dark' ? 'gray.500' : 'gray.700'}>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt.
						</Text>
						<DefaultButton>Visit My Website</DefaultButton>
					</Box>
					<Box>
						<Heading as="h2" fontSize="2em" mb={6}>
							Get Started
						</Heading>
						<Text mb={6} color={colorMode === 'dark' ? 'gray.500' : 'gray.700'}>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt.
						</Text>
						<VStack alignItems="flex-start" spacing={6}>
							<DefaultButton>Discover Subreddits</DefaultButton>
							<DefaultButton>Discover Stories</DefaultButton>
						</VStack>
					</Box>
				</SimpleGrid>
			</SectionContainer>
		</>
	)
}
