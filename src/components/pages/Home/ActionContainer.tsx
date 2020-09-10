import React from 'react'
import PaddedContainer from "../../general/PaddedContainer"
import DefaultButton from "../../general/DefaultButton"
import { Heading } from "@chakra-ui/core"

interface ActionProps {
	title: string
	link: string
}

const ActionContainer = ({ title, link }: ActionProps) => {
	return (
		<PaddedContainer>
			<Heading mb={6}>View All Subreddits</Heading>
			<DefaultButton>Browse</DefaultButton>
		</PaddedContainer>
	)
}

export default ActionContainer
