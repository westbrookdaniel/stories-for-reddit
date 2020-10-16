import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import { SimpleGrid, useColorMode } from '@chakra-ui/core'
import TopDetails from './components/pages/List/TopDetails'
import Card from './components/util/Card'
import SectionContainer from './components/layout/SectionContainer'
import { reddit } from './api'
import { useFilter } from './components/pages/List/useFilter'
import { SkeletonCards } from './components/util/Skeletons'
import { AnimatePresence, motion } from 'framer-motion'

export default function Subreddits() {
	const { colorMode } = useColorMode()
	const [subreddits, setSubreddits] = useState<any>(null)

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		const data = await reddit.getSubreddits()
		console.log(data)

		setSubreddits(data)
	}

	// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

	const animation = {
		animate: { opacity: 1 },
		initial: { opacity: 0 },
		exit: { opacity: 0 },
	}

	const [query, setQuery] = useState('')
	const filter = useFilter(subreddits, query)
	const [firstLoaded, setFirstLoaded] = useState(false)

	useEffect(() => {
		if (!firstLoaded) {
			if (subreddits && filter.length !== 0) {
				setFirstLoaded(true)
			}
		}
	}, [subreddits, filter, firstLoaded])

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
						<motion.div id="1" {...animation}>
							<SimpleGrid columns={4} spacing={5}>
								{filter.map((subreddit) => {
									return (
										<Card
											key={filter.indexOf(subreddit)}
											title={`r/${subreddit.title}`}
											link={`/subreddits/${subreddit.title}`}
											badge={subreddit.subs ? `${subreddit.subs}k` : undefined}
										/>
									)
								})}
							</SimpleGrid>
						</motion.div>
					) : (
						<SimpleGrid columns={4} spacing={5}>
							{SkeletonCards({ quanitity: 8, motionProps: animation })}
						</SimpleGrid>
					)}
				</AnimatePresence>
			</SectionContainer>
		</>
	)
}
