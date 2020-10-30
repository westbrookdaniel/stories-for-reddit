import { Flex } from '@chakra-ui/core'
import React, { FunctionComponent } from 'react'

interface CardProps {}

const CardWrap: FunctionComponent<CardProps> = ({ children, ...props }) => {
	return (
		<Flex flexWrap="wrap" className="spaced-flex" {...props}>
			{children}
		</Flex>
	)
}

export default CardWrap
