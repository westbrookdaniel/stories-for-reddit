import React from 'react'
import PaddedContainer from '../../util/PaddedContainer'
import DefaultButton from '../../util/DefaultButton'
import { Heading } from '@chakra-ui/core'
import { Link } from 'react-router-dom'

interface ActionProps {
	title: string
	link: string
}

const ActionContainer = ({ title, link }: ActionProps) => {
	return (
		<PaddedContainer>
			<Heading mb={6}>{title}</Heading>
			<Link to={link}>
				<DefaultButton>Browse</DefaultButton>
			</Link>
		</PaddedContainer>
	)
}

export default ActionContainer
