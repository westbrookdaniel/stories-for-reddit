import React, { useEffect, useState } from 'react'

import { placeholder, firebase } from './api'

import { Helmet } from 'react-helmet'
import Hero from './components/sections/Hero'
import SectionContainer from './components/layout/SectionContainer'
import CardRow from './components/layout/CardRow'
import { VStack, SimpleGrid } from '@chakra-ui/core'
import ActionContainer from './components/pages/Home/ActionContainer'
import TopDetails from './components/pages/List/TopDetails'

export default function Stories() {
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
				<title>All Stories | Stories For Reddit</title>
			</Helmet>
			<TopDetails title="All Stories" />
			<SectionContainer maxW="7xl" mb={16}>
				<VStack spacing={10}>
					<CardRow title="Featured Stories" w="100%" />
				</VStack>
			</SectionContainer>
		</>
	)
}
