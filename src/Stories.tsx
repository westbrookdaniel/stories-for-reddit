import React, { useEffect, useState } from 'react'

import { reddit } from './api'

import { Helmet } from 'react-helmet'
import SectionContainer from './components/layout/SectionContainer'
import { SimpleGrid, useColorMode } from '@chakra-ui/core'
import TopDetails from './components/pages/List/TopDetails'
import Card from './components/util/Card'
import { CardPost } from './types'
import { SkeletonCards } from './components/util/Skeletons'
import { AnimatePresence, motion } from 'framer-motion'
import { useList } from './components/pages/List/useList'
import { mapFromPosts } from './components/pages/List/mapFromPosts'
import { fadeAnimation } from './components/util/animations'

export default function Stories() {
	const { colorMode } = useColorMode()
	const [posts, setPosts] = useState<null | CardPost[]>(null)

	useEffect(() => {
		getStories()
	}, [])

	const getStories = async () => {
		const rawPosts = await reddit.getFeaturedStories()
		if (typeof rawPosts === 'string') {
			setPosts([])
			throw new Error(rawPosts)
		}
		setPosts(
			rawPosts.map((post: any) => ({
				title: post.title,
				length: post.selftext_html?.length,
				id: post.id,
				url: post.url,
			}))
		)
	}

	const { query, setQuery, filter, firstLoaded } = useList(posts)

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
								{mapFromPosts(filter)}
							</SimpleGrid>
						</motion.div>
					) : (
						<SimpleGrid columns={4} spacing={5}>
							{SkeletonCards({ quanitity: 12, motionProps: fadeAnimation })}
						</SimpleGrid>
					)}
				</AnimatePresence>
			</SectionContainer>
		</>
	)
}
