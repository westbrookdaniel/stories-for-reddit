import React, { FunctionComponent, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Hero from './components/pages/Home/Hero'
import SectionContainer from './components/layout/SectionContainer'
import CardRow from './components/layout/CardRow'
import { VStack, SimpleGrid, HStack } from '@chakra-ui/core'
import ActionContainer from './components/pages/Home/ActionContainer'
import { useListWithoutFilter } from './components/pages/List/useList'
import { reddit } from './api'
import { CardPost } from './types'
import CardWrap from './components/layout/CardWrap'
import { mapFromPosts } from './components/pages/List/mapFromPosts'
import { SkeletonCards } from './components/util/Skeletons'
import { fadeAnimation } from './components/util/animations'
import { AnimatePresence, motion } from 'framer-motion'
import mapFromSubreddits from './components/pages/List/mapFromSubreddits'

export default function Home() {
	const [posts, setPosts] = useState<null | CardPost[]>(null)
	const [subreddits, setSubreddits] = useState<null | any[]>(null)

	useEffect(() => {
		getStories()
		getSubreddits()
	}, [])

	const getStories = async () => {
		const rawPosts = await reddit.getFeaturedStories(3)
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
	const { firstLoaded: loadedStories } = useListWithoutFilter(posts)

	const getSubreddits = async () => {
		const data = await reddit.getSubreddits(3)
		setSubreddits(data)
	}

	const { firstLoaded: loadedSubreddits } = useListWithoutFilter(subreddits)

	return (
		<>
			<Helmet>
				<title>Stories For Reddit | Online Reader</title>
			</Helmet>
			<Hero />
			<SectionContainer maxW="7xl" mb={16}>
				<VStack spacing={10}>
					<CardRow title="Featured Stories" w="100%">
						<AnimatePresence exitBeforeEnter>
							{loadedStories ? (
								<motion.div id="1" {...fadeAnimation}>
									<CardWrap>{mapFromPosts(posts)}</CardWrap>
								</motion.div>
							) : (
								<CardWrap>
									{SkeletonCards({ quanitity: 3, motionProps: fadeAnimation })}
								</CardWrap>
							)}
						</AnimatePresence>
					</CardRow>
					<CardRow title="Featured Subreddits" w="100%">
						<AnimatePresence exitBeforeEnter>
							{loadedSubreddits ? (
								<motion.div id="1" {...fadeAnimation}>
									<CardWrap>{mapFromSubreddits(subreddits)}</CardWrap>
								</motion.div>
							) : (
								<CardWrap>
									{SkeletonCards({ quanitity: 3, motionProps: fadeAnimation })}
								</CardWrap>
							)}
						</AnimatePresence>
					</CardRow>
					<SimpleGrid columns={[1, 1, 1, 2]} w="100%" gap={10}>
						<ActionContainer title="View All Subreddits" link="/subreddits" />
						<ActionContainer title="Discover All Stories" link="/stories" />
					</SimpleGrid>
				</VStack>
			</SectionContainer>
		</>
	)
}
