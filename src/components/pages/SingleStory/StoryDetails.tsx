import React, { ReactElement, useEffect, useState } from 'react'
import { Box, Heading, Text, useColorMode, useTheme } from '@chakra-ui/core'
import IconStack from './IconStack'
import { AnyObject } from '../../../types'

interface Props {
	postData: any
}

export default function StoryDetails({ postData }: Props): ReactElement {
	const { colorMode } = useColorMode()
	const [post, setPost] = useState<AnyObject>()

	useEffect(() => {
		setPost({
			title: postData.title,
			length: postData.selftext_html?.length,
			id: postData.id,
			url: postData.url,
		})
	}, [postData])

	return (
		<>
			<Heading color={colorMode === 'dark' ? 'white' : 'primary.700'} mb={4}>
				{postData?.title}
			</Heading>
			<Text color={colorMode === 'dark' ? 'primary.100' : 'primary.500'}>
				From {postData?.subreddit_name_prefixed}
			</Text>
			<Text color={colorMode === 'dark' ? 'primary.100' : 'primary.500'}>
				By {postData?.author.name}
			</Text>
			<Box mt={3}>
				<IconStack postData={{ ...post, type: 'stories' }} />
			</Box>
		</>
	)
}
