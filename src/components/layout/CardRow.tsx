import React from 'react'
import Card from '../general/Card'
import { HStack, Box, Heading } from '@chakra-ui/core'
import PaddedContainer from '../general/PaddedContainer'

interface Props {
    title: string
    [index: string]: any
}

const CardRow = ({title, ...props}: Props) => {
	return (
        <PaddedContainer {...props}>
            <Heading mb={8}>{title}</Heading>
			<HStack spacing={6}>
				<Card title="[HR] Monster Hunter Saga" time="14 min" />
				<Card title="[HR] Monster Hunter Saga" time="14 min" />
				<Card title="[HR] Monster Hunter Saga" time="14 min" />
				<Card title="[HR] Monster Hunter Saga" time="14 min" />
			</HStack>
        </PaddedContainer>
	)
}

export default CardRow
