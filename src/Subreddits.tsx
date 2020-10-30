import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import { Flex, SimpleGrid, useColorMode } from '@chakra-ui/core'
import TopDetails from './components/pages/List/TopDetails'
import Card from './components/util/Card'
import SectionContainer from './components/layout/SectionContainer'
import { reddit } from './api'
import { SkeletonCards } from './components/util/Skeletons'
import { AnimatePresence, motion } from 'framer-motion'
import { useList } from './components/pages/List/useList'
import { fadeAnimation } from './components/util/animations'
import mapFromSubreddits from './components/pages/List/mapFromSubreddits'
import makeCancelable from './helpers/makeCancelable'
import CardWrap from './components/layout/CardWrap'

export default function Subreddits() {
	const { colorMode } = useColorMode()
	const [subreddits, setSubreddits] = useState<any>(null)

	useEffect(() => {
		const p = reddit.getSubreddits()
		const { promise, cancel } = makeCancelable(p)
		promise
			.then((data) => {
				setSubreddits(data)
			})
			.catch((reason) => console.log(reason))
		return cancel
	}, [])

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
				maxW="5xl"
			/>
			<SectionContainer
				maxW="5xl"
				bg={colorMode === 'dark' ? 'tan.950' : 'tan.400'}
				pb={8}
				flexGrow={1}
			>
				<AnimatePresence exitBeforeEnter>
					{firstLoaded ? (
						<motion.div id="1" {...fadeAnimation}>
							<CardWrap>
								{mapFromSubreddits(filter)}
							</CardWrap>
						</motion.div>
					) : (
						<CardWrap>
							{SkeletonCards({ quanitity: 8, motionProps: fadeAnimation })}
						</CardWrap>
					)}
				</AnimatePresence>
			</SectionContainer>
		</>
	)
}
