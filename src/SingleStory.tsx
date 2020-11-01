import { Box, HStack, SkeletonText, Stack, useColorMode } from '@chakra-ui/core'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { reddit } from './api'
import SectionContainer from './components/layout/SectionContainer'
import DOMPurify from 'dompurify'
import { AnimatePresence, motion } from 'framer-motion'
import StoryDetails from './components/pages/SingleStory/StoryDetails'
import { Helmet } from 'react-helmet'

interface Props {
	[index: string]: any
}

const MotionBox = motion.custom(Box)

export default function SingleStory(props: Props): ReactElement {
	const { colorMode } = useColorMode()
	const stickyEl = useRef<HTMLDivElement>(null)
	const [postData, setPostData] = useState<any>(null)
	const [pageTitle, setPageTitle] = useState('Loading')

	
	useEffect(() => {
		getPostData()
		window.addEventListener('scroll', handleScroll)
	}, [])

	const getPostData = async () => {
		const data = await reddit.getStoryById(props.match.params.id)
		setPostData(data)
	}

	const handleScroll = () => {
		stickyEl.current
			? (stickyEl.current.style.top = `${window.scrollY + 50}px`)
			: null
	}
	
	useEffect(() => {
		if (typeof postData?.title === 'string') {
			setPageTitle(`${postData.title.substring(0, 20)}...`)
		}
	}, [postData])

	return (
		<Box
			bg={colorMode === 'dark' ? 'tan.950' : 'tan.400'}
			height="100%"
			position="relative"
		>
			<Helmet>
				<title>{pageTitle} | Stories For Reddit</title>
			</Helmet>
			<SectionContainer p={[0, 0, 8]}>
				<Box>
					<AnimatePresence exitBeforeEnter>
						{postData ? (
							<Stack
								direction={[
									'column-reverse',
									'column-reverse',
									'column-reverse',
									'column-reverse',
									'row',
								]}
								key={0}
								mt={[10, 10, 4, 4, 0]}
								spacing={[8, 8, 8, 8, 16]}
								alignItems="stretch"
							>
								<MotionBox
									bg={colorMode === 'dark' ? 'gray.800' : 'white'}
									w="100%"
									maxW={['none', 'none', '2xl']}
									h="100%"
									overflow="scroll"
									boxShadow={['none', 'none', 'lg']}
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
								<Box
									position="relative"
									w={['inherit', 'inherit', 'inherit', 'inherit', '600px']}
								>
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
										position={[
											'relative',
											'relative',
											'relative',
											'relative',
											'absolute',
										]}
										px={[10, 10, 10, 10, 0]}
										top={50}
										className="story-details"
										ref={stickyEl}
									>
										<StoryDetails postData={postData} />
									</MotionBox>
								</Box>
							</Stack>
						) : (
							<Stack
								direction={[
									'column-reverse',
									'column-reverse',
									'column-reverse',
									'column-reverse',
									'row',
								]}
								key={1}
								mt={[10, 10, 4, 4, 0]}
								spacing={[8, 8, 8, 8, 16]}
								alignItems="stretch"
							>
								<MotionBox
									bg={colorMode === 'dark' ? 'gray.800' : 'white'}
									w="100%"
									maxW={['none', 'none', '2xl']}
									h="100%"
									overflow="scroll"
									boxShadow={['none', 'none', 'lg']}
									px={10}
									py={12}
									className="story-details"
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
								<Box
									position="relative"
									w={['inherit', 'inherit', 'inherit', 'inherit', '600px']}
								></Box>
							</Stack>
						)}
					</AnimatePresence>
				</Box>
			</SectionContainer>
		</Box>
	)
}
