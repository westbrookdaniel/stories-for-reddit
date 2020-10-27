import { SimpleGrid } from '@chakra-ui/core'
import React, { FunctionComponent } from 'react'

interface CardProps {}

const CardStack: FunctionComponent<CardProps> = ({ children, ...props }) => {
	return (
		<SimpleGrid spacing={6} d="flex" flexWrap="wrap" {...props}>
			{children}
		</SimpleGrid>
	)
}

export default CardStack
