import React, { useEffect, useContext, useState } from 'react'

import { reddit } from './api'

import { Helmet } from 'react-helmet'
import SectionContainer from './components/layout/SectionContainer'
import { SimpleGrid, Skeleton, Spinner, useColorMode } from '@chakra-ui/core'
import TopDetails from './components/pages/List/TopDetails'
import Card from './components/util/Card'
import { PageContext, PageStateProps } from './PageProvider'
import { CardPost } from './types'
import { SkeletonCards } from './components/util/Skeletons'
import { AnimatePresence, motion } from 'framer-motion'

export default function Stories() {
	const { colorMode } = useColorMode()

	const [posts, setPosts] = useState<null | CardPost[]>(null)
	const {
		page: [, setPageState],
	}: PageStateProps = useContext(PageContext)

	useEffect(() => {
		setPageState('hidden')
		getStories()
	}, [])

	const getStories = async () => {
		const rawPosts = await reddit.getFeaturedStories()
		if (!rawPosts) throw 'can not get featured stories'
		setPosts(
			rawPosts.map((post) => ({
				title: post.title,
				length: post.selftext_html?.length,
				id: post.id,
			}))
		)
	}

	const animation = {
		animate: { opacity: 1 },
		initial: { opacity: 0 },
		exit: { opacity: 0 },
	}

	return (
		<>
			<Helmet>
				<title>Featured Stories | Stories For Reddit</title>
			</Helmet>
			<TopDetails mb={6} title="Featured Stories" maxW="4xl" />
			<SectionContainer
				maxW="4xl"
				bg={colorMode === 'dark' ? 'tan.950' : 'tan.400'}
				pb={8}
			>
				<SimpleGrid columns={4} spacing={5}>
					<AnimatePresence exitBeforeEnter>
						{posts
							? posts.map((post) => {
									// Character Per Minuite Reading Time
									const time = Math.floor(post.length! / 1250)
									return (
										<motion.div key={post.id} {...animation}>
											<Card
												title={post.title}
												time={time ? `${time} min` : undefined}
												link={`/story/${post.id}`}
												linkData={post}
											/>
										</motion.div>
									)
							  })
							: SkeletonCards({ quanitity: 12, motionProps: animation })}
					</AnimatePresence>
				</SimpleGrid>
			</SectionContainer>
		</>
	)
}
