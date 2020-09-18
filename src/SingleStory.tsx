import {
	Box,
	Heading,
	HStack,
	SkeletonText,
	Text,
	useColorMode,
	VStack,
} from '@chakra-ui/core'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { Submission } from 'snoowrap'
import { reddit } from './api'
import SectionContainer from './components/layout/SectionContainer'
import DOMPurify from 'dompurify'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
	[index: string]: any
}

const MotionBox = motion.custom(Box)

export default function SingleStory(props: Props): ReactElement {
	const { colorMode } = useColorMode()
	const stickyEl = useRef<HTMLDivElement>(null)

	const [postData, setPostData] = useState<any>(null)
	useEffect(() => {
		getPostData()
		window.addEventListener('scroll', handleScroll)
	}, [])

	const getPostData = async () => {
		const data = await reddit.getStoryById(props.match.params.id)
		setPostData(data)
	}

	// useEffect(() => {
	// 	handleScroll()
	// 	stickyEl.current ? (stickyEl.current.style.opacity = '1') : null
	// }, [postData])

	const handleScroll = () => {
		stickyEl.current
			? (stickyEl.current.style.top = `${window.scrollY + 600}px`)
			: null
	}

	return (
		<Box
			bg={colorMode === 'dark' ? 'tan.950' : 'tan.400'}
			height="100%"
			position="relative"
		>
			<SectionContainer>
				<Box>
					<AnimatePresence exitBeforeEnter>
						{postData ? (
							<HStack key={0} spacing={16} alignItems="stretch">
								<MotionBox
									bg={colorMode === 'dark' ? 'gray.800' : 'white'}
									w="100%"
									maxW="2xl"
									h="100%"
									overflow="scroll"
									boxShadow="lg"
									px={10}
									py={12}
									initial={{
										y: 20,
										opacity: 0,
									}}
									animate={{
										y: 0,
										opacity: 1,
										transition: { duration: 0.5, ease: 'easeOut' },
									}}
									exit={{
										opacity: 0,
										transition: { duration: 1 },
									}}
									// Sanitized to prevent XSS
									dangerouslySetInnerHTML={{
										__html: DOMPurify.sanitize(postData?.selftext_html),
									}}
								></MotionBox>
								<Box position="relative" w="600px">
									<MotionBox
										initial={{
											opacity: 0,
										}}
										animate={{
											opacity: 1,
											transition: { duration: 0.5, ease: 'easeOut' },
										}}
										exit={{
											opacity: 0,
											transition: { duration: 1 },
										}}
										position="absolute"
										top={600}
										ref={stickyEl}
									>
										<Heading>Title</Heading>
										<Text>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Sapiente, nesciunt.
										</Text>
									</MotionBox>
								</Box>
							</HStack>
						) : (
							<HStack key={1} spacing={16} alignItems="stretch">
								<MotionBox
									bg={colorMode === 'dark' ? 'gray.800' : 'white'}
									w="100%"
									maxW="2xl"
									h="100%"
									overflow="scroll"
									boxShadow="lg"
									px={10}
									py={12}
									initial={{
										y: 20,
										opacity: 0,
									}}
									animate={{
										y: 0,
										opacity: 1,
										transition: { duration: 0.5, ease: 'easeOut' },
									}}
									exit={{
										opacity: 0,
										transition: { duration: 0.5 },
									}}
								>
									<SkeletonText spacing={5} noOfLines={32} />
								</MotionBox>
								<Box position="relative" w="600px"></Box>
							</HStack>
						)}
					</AnimatePresence>
				</Box>
			</SectionContainer>
		</Box>
	)
}
