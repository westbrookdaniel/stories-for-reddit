import React, { ReactElement } from 'react'
import { Box, Heading, Text, useColorMode, useTheme } from '@chakra-ui/core'
import IconStack from './IconStack'

interface Props {
	postData: any
}

export default function StoryDetails({ postData }: Props): ReactElement {
	const { colorMode } = useColorMode()

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
				<IconStack postData={postData} />
			</Box>
		</>
	)
}
