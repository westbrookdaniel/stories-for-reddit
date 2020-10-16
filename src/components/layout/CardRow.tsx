import React from 'react'
import { HStack, Box, Heading } from '@chakra-ui/core'
import PaddedContainer from '../util/PaddedContainer'

interface Props {
	title: string
	[index: string]: any
	compact?: boolean
}

const CardRow = ({ title, compact = false, children, ...props }: Props) => {
	return (
		<PaddedContainer {...props}>
			<Heading mb={8}>{title}</Heading>
			{children}
		</PaddedContainer>
	)
}

export default CardRow
