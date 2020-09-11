import React, { useEffect, useState, useContext } from 'react'

import { placeholder, firebase } from './api'

import { Helmet } from 'react-helmet'
import Hero from './components/sections/Hero'
import SectionContainer from './components/layout/SectionContainer'
import CardRow from './components/layout/CardRow'
import { VStack, SimpleGrid, Text, useColorMode } from '@chakra-ui/core'
import ActionContainer from './components/pages/Home/ActionContainer'
import TopDetails from './components/pages/List/TopDetails'
import Card from './components/general/Card'
import { PageContext, PageStateProps } from './PageProvider'

export default function Stories() {
	const { colorMode } = useColorMode()

	const {
		page: [, setPageState],
	}: PageStateProps = useContext(PageContext)
	setPageState('hidden')

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

	const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

	return (
		<>
			<Helmet>
				<title>All Featured Stories | Stories For Reddit</title>
			</Helmet>
			<TopDetails mb={6} title="All Featured Stories" maxW="4xl" />
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
