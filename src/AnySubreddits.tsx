import React, { useEffect, useState } from 'react'

import { reddit } from './api'

import { Helmet } from 'react-helmet'
import SectionContainer from './components/layout/SectionContainer'
import { Box, Button, SimpleGrid, useColorMode } from '@chakra-ui/core'
import TopDetails from './components/pages/List/TopDetails'
import Card from './components/util/Card'
import { CardPost } from './types'
import { SkeletonCards } from './components/util/Skeletons'
import { AnimatePresence, motion } from 'framer-motion'
import { useList } from './components/pages/List/useList'
import { fadeAnimation } from './components/util/animations'
import { reorder } from './components/util/sortBy'
import { mapFromPosts } from './components/pages/List/mapFromPosts'

interface Props {
	[key: string]: any
}

export default function Stories(props: Props) {
	const { colorMode } = useColorMode()
	const [posts, setPosts] = useState<null | CardPost[]>(null)
	const [ordered, setOrdered] = useState<null | CardPost[]>(null)
	const [pageCount, setPageCount] = useState(1)
	const [isLoadingMore, setIsLoadingMore] = useState(true)

	useEffect(() => {		
		getStories(pageCount)
	}, [pageCount])

	const getMore = () => {
		setIsLoadingMore(true)
		setPageCount((count) => count + 1)
	}

	const getStories = async (n: number) => {
		const rawPosts = await reddit.getSubredditStories(
			props.match.params.id,
			n * 12
		)
		if (typeof rawPosts === 'string') {
			setPosts([])
			throw new Error(rawPosts)
		}
		setIsLoadingMore(false)
		setPosts(
			rawPosts.map((post: any) => ({
				title: post.title,
				length: post.selftext_html?.length,
				id: post.id,
				url: post.url,
			}))
		)
	}

	const animation = {
		animate: { opacity: 1 },
		initial: { opacity: 0 },
		exit: { opacity: 0 },
	}

	const { query, setQuery, filter, firstLoaded } = useList(ordered || posts)

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

	return (
		<>
			<Helmet>
				<title>r/{props.match.params.id} | Stories For Reddit</title>
			</Helmet>
			<TopDetails
				query={query}
				setQuery={setQuery}
				mb={6}
				title={`${props.match.params.id}`}
				maxW="4xl"
				sortListBy={sortListBy}
			/>
			<SectionContainer
				maxW="4xl"
				bg={colorMode === 'dark' ? 'tan.950' : 'tan.400'}
				pb={4}
				flexGrow={1}
			>
				<AnimatePresence exitBeforeEnter>
					{firstLoaded ? (
						<motion.div id="1" {...fadeAnimation}>
							<SimpleGrid columns={4} spacing={5}>
								{mapFromPosts(filter)}
							</SimpleGrid>
						</motion.div>
					) : (
						<SimpleGrid columns={4} spacing={5}>
							{SkeletonCards({ quanitity: 12, motionProps: fadeAnimation })}
						</SimpleGrid>
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
