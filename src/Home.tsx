import React, { useEffect, useState } from 'react'

import { placeholder, firebase } from './api'

import { Helmet } from 'react-helmet'
import Hero from './components/sections/Hero'
import SectionContainer from './components/layout/SectionContainer'
import CardRow from './components/layout/CardRow'
import { VStack, SimpleGrid } from '@chakra-ui/core'
import ActionContainer from './components/pages/Home/ActionContainer'

export default function Home() {
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

	return (
		<>
			<Helmet>
				<title>Stories For Reddit | Online Reader</title>
			</Helmet>
			<Hero />
			<SectionContainer maxW="7xl" mb={16}>
				<VStack spacing={10}>
					<CardRow title="Featured Stories" w="100%" />
					<CardRow title="Featured Subreddits" w="100%" />
					<SimpleGrid columns={2} w="100%" gap={10}>
						<ActionContainer title="View All Subreddits" link="/"/>
						<ActionContainer title="View All Subreddits" link="/"/>
					</SimpleGrid>
				</VStack>
			</SectionContainer>
		</>
	)
}
