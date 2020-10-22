import { Box, Text } from '@chakra-ui/core'
import React from 'react'
import Card from '../../util/Card'

export default function mapFromSubreddits(
	subreddits: any,
	msg = 'No Subreddits'
) {
	if (subreddits.length === 0) {
		return (
			<Box h="200px">
				<Text>{msg}</Text>
			</Box>
		)
	}

	return subreddits.map((subreddit: any) => {
		return (
			<Card
				key={subreddits.indexOf(subreddit)}
				title={`r/${subreddit.title}`}
				link={`/subreddits/${subreddit.title}`}
				badge={subreddit.subs ? `${subreddit.subs}k` : undefined}
				postData={{ ...subreddit, type: 'subreddits' }}
			/>
		)
	})
}
