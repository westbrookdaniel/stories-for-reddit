import { Box } from '@chakra-ui/core'
import React, { ReactElement, useEffect, useState } from 'react'
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
	const [postData, setPostData] = useState<any>(null)
	useEffect(() => {
		getPostData()
	}, [])

	const getPostData = async () => {
		const data = await reddit.getStoryById(props.match.params.id)
		setPostData(data)
	}

	return (
		<Box position="relative">
			<SectionContainer>
				<Box h="100%">
					{/* WORK IN PROGRESS */}
					<AnimatePresence>
						{postData && (
							<MotionBox
								w="100%"
								maxW="2xl"
								h="100%"
								maxH="calc(100vh - 200px)"
								overflow="scroll"
								boxShadow="lg"
								p={10}
								py={12}
								initial={{
									y: 20,
									opacity: 0
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
								key={0}
								// Sanitized to prevent XSS
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(postData?.selftext_html),
								}}
							></MotionBox>
						)}
					</AnimatePresence>
				</Box>
			</SectionContainer>
		</Box>
	)
}
