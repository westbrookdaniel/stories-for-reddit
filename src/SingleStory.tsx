import { Box } from '@chakra-ui/core'
import React, { ReactElement, useEffect, useState } from 'react'
import { Submission } from 'snoowrap'
import { reddit } from './api'
import SectionContainer from './components/layout/SectionContainer'

interface Props {
	[index: string]: any
}

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
		<SectionContainer>
			Story {props.match.params.id}
            {/* NEEDS HTML SANITISATION */}
			{/* <Box dangerouslySetInnerHTML={{__html: postData?.selftext_html}}></Box> */}
		</SectionContainer>
	)
}
