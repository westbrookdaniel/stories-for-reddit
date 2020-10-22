import { Box, Text } from '@chakra-ui/core'
import React from 'react'
import Card from '../../util/Card'

export function mapFromPosts(posts: any, msg = 'No Stories') {
	if (posts.length === 0) {
		return (
			<Box h="200px">
				<Text>{msg}</Text>
			</Box>
		)
	}
	return posts.map((post: any) => {
		// Character Per Minuite Reading Time
		const time = Math.floor(post.length! / 1250)
		return (
			<Card
				key={post.id}
				title={
					post.title.length > 48
						? post.title.substring(0, 48) + '...'
						: post.title
				}
				badge={time ? `${time} min` : undefined}
				link={`/stories/${post.id}`}
				postData={post}
			/>
		)
	})
}
