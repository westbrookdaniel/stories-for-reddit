import React from 'react'

import { Helmet } from 'react-helmet'
import { SimpleGrid, useColorMode } from '@chakra-ui/core'
import TopDetails from './components/pages/List/TopDetails'
import Card from './components/util/Card'
import SectionContainer from './components/layout/SectionContainer'

export default function Subreddits() {
	const { colorMode } = useColorMode()

	const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

	return (
		<>
			<Helmet>
				<title>All Subreddits | Stories For Reddit</title>
			</Helmet>
			<TopDetails mb={6} title="All Subreddits" maxW="4xl" />
			<SectionContainer
				maxW="4xl"
				bg={colorMode === 'dark' ? 'tan.950' : 'tan.400'}
				pb={8}
			>
				<SimpleGrid columns={4} spacing={5}>
					{cards.map((card) => {
						return (
							<Card
								key={cards.indexOf(card)}
								title="r/shortstories"
								badge="14.2k"
								compact
							/>
						)
					})}
				</SimpleGrid>
			</SectionContainer>
		</>
	)
}
