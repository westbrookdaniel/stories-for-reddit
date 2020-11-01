import React, { useEffect, useState } from 'react'

import { reddit } from './api'

import { Helmet } from 'react-helmet'
import SectionContainer from './components/layout/SectionContainer'
import { Box, Button, Flex, SimpleGrid, useColorMode } from '@chakra-ui/core'
import TopDetails from './components/pages/List/TopDetails'
import Card from './components/util/Card'
import { CardPost } from './types'
import { SkeletonCards } from './components/util/Skeletons'
import { AnimatePresence, motion } from 'framer-motion'
import { useList } from './components/pages/List/useList'
import { mapFromPosts } from './components/pages/List/mapFromPosts'
import { fadeAnimation } from './components/util/animations'
import { useFilter } from './components/pages/List/useFilter'
import { reorder, sortBy } from './components/util/sortBy'
import makeCancelable from './helpers/makeCancelable'
import CardWrap from './components/layout/CardWrap'

export default function Stories() {
	const { colorMode } = useColorMode()
	const [posts, setPosts] = useState<null | CardPost[]>(null)
	const [ordered, setOrdered] = useState<null | CardPost[]>(null)
	const [pageCount, setPageCount] = useState(1)
	const [isLoadingMore, setIsLoadingMore] = useState(true)

	useEffect(() => {
		const p = reddit.getFeaturedStories(pageCount * 12)
		const { promise, cancel } = makeCancelable(p)
		promise
			.then((rawPosts: any) => {
				setIsLoadingMore(false)
				setPosts(
					rawPosts.map((post: any) => ({
						title: post.title,
						length: post.selftext_html?.length,
						id: post.id,
						url: post.url,
					}))
				)
			})
			.catch((reason) => {
				setPosts([])
				console.log(reason)
			})
		return cancel
	}, [pageCount])

	const getMore = () => {
		setIsLoadingMore(true)
		setPageCount((count) => count + 1)
	}

	const sortListBy = {
		unsorted: {
			method: () => {
				setOrdered(null)
			},
			name: 'None',
		},
		lengthLow: {
			method: () => {
				reorder(posts, setOrdered, 'length')
			},
			name: 'Shortest',
		},
		lengthHigh: {
			method: () => {
				reorder(posts, setOrdered, 'length', true)
			},
			name: 'Longest',
		},
	}

	const { query, setQuery, filter, firstLoaded } = useList(ordered || posts)

	return (
		<>
			<Helmet>
				<title>Featured Stories | Stories For Reddit</title>
			</Helmet>
			<TopDetails
				query={query}
				setQuery={setQuery}
				mb={6}
				title="Featured Stories"
				maxW="5xl"
				sortListBy={sortListBy}
			/>
			<SectionContainer
				maxW="5xl"
				bg={colorMode === 'dark' ? 'tan.950' : 'tan.400'}
				pb={4}
				flexGrow={1}
			>
				<AnimatePresence exitBeforeEnter>
					{firstLoaded ? (
						<motion.div id="1" {...fadeAnimation}>
							<CardWrap>{mapFromPosts(filter)}</CardWrap>
						</motion.div>
					) : (
						<CardWrap>
							{SkeletonCards({ quanitity: 12, motionProps: fadeAnimation })}
						</CardWrap>
					)}
				</AnimatePresence>
				<Box mt={8}>
					{/* TODO: Fix jumping back to the top */}
					<Button
						colorScheme="primary"
						variant="ghost"
						size="sm"
						isLoading={isLoadingMore}
						onClick={getMore}
					>
						Show More
					</Button>
				</Box>
			</SectionContainer>
		</>
	)
}
