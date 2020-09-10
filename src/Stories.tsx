import React, { useEffect, useState } from 'react'

import { placeholder, firebase } from './api'

import { Helmet } from 'react-helmet'
import Hero from './components/sections/Hero'
import SectionContainer from './components/layout/SectionContainer'
import CardRow from './components/layout/CardRow'
import { VStack, SimpleGrid, Text, useColorMode } from '@chakra-ui/core'
import ActionContainer from './components/pages/Home/ActionContainer'
import TopDetails from './components/pages/List/TopDetails'
import Card from './components/general/Card'

export default function Stories() {
	const { colorMode } = useColorMode()

	// useEffect(() => {
	// 	callp()
	// 	callf()
	// }, [])

	// const callf = async () => {
	// 	const fdata = await firebase.get('users')
	// 	console.log(fdata)
	// }
	// const callp = async () => {
	// 	const pdata = await placeholder.getPosts()
	// 	setPosts(pdata)
	// }

	const cards = new Array(12)
	cards.fill(Date.now())

	return (
		<>
			<Helmet>
				<title>All Stories | Stories For Reddit</title>
			</Helmet>
			<TopDetails mb={6} title="All Stories" maxW="4xl" />
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
								title="[HR] Monster Hunter Saga"
								time="14 min"
							/>
						)
					})}
				</SimpleGrid>
			</SectionContainer>
		</>
	)
}
