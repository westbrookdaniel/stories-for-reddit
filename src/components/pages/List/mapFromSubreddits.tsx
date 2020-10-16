import React from 'react'
import Card from '../../util/Card'

export default function mapFromSubreddits(subreddits: any) {
	return subreddits.map((subreddit: any) => {
		return (
			<Card
				key={subreddits.indexOf(subreddit)}
				title={`r/${subreddit.title}`}
				link={`/subreddits/${subreddit.title}`}
				badge={subreddit.subs ? `${subreddit.subs}k` : undefined}
			/>
		)
	})
}
