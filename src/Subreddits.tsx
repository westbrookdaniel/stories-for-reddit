import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import { SimpleGrid, useColorMode } from '@chakra-ui/core'
import TopDetails from './components/pages/List/TopDetails'
import Card from './components/util/Card'
import SectionContainer from './components/layout/SectionContainer'
import { reddit } from './api'
import { SkeletonCards } from './components/util/Skeletons'
import { AnimatePresence, motion } from 'framer-motion'
import { useList } from './components/pages/List/useList'
import { fadeAnimation } from './components/util/animations'
import mapFromSubreddits from './components/pages/List/mapFromSubreddits'

export default function Subreddits() {
	const { colorMode } = useColorMode()
	const [subreddits, setSubreddits] = useState<any>(null)

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		const data = await reddit.getSubreddits()
		setSubreddits(data)
	}

	const { query, setQuery, filter, firstLoaded } = useList(subreddits)

	return (
		<>
			<Helmet>
				<title>All Subreddits | Stories For Reddit</title>
			</Helmet>
			<TopDetails
				query={query}
				setQuery={setQuery}
				mb={6}
				title="All Subreddits"
				maxW="4xl"
			/>
			<SectionContainer
				maxW="4xl"
				bg={colorMode === 'dark' ? 'tan.950' : 'tan.400'}
				pb={8}
				flexGrow={1}
			>
				<AnimatePresence exitBeforeEnter>
					{firstLoaded ? (
						<motion.div id="1" {...fadeAnimation}>
							<SimpleGrid columns={4} spacing={5}>
								{mapFromSubreddits(filter)}
							</SimpleGrid>
						</motion.div>
					) : (
						<SimpleGrid columns={4} spacing={5}>
							{SkeletonCards({ quanitity: 8, motionProps: fadeAnimation })}
						</SimpleGrid>
					)}
				</AnimatePresence>
			</SectionContainer>
		</>
	)
}
