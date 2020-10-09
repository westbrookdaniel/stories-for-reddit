import React from 'react'
import Card from '../util/Card'
import { HStack, Box, Heading } from '@chakra-ui/core'
import PaddedContainer from '../util/PaddedContainer'

interface Props {
    title: string
	[index: string]: any
	compact?: boolean
}

const CardRow = ({title, compact = false, ...props}: Props) => {
	return (
        <PaddedContainer {...props}>
            <Heading mb={8}>{title}</Heading>
			<HStack spacing={6}>
				<Card title="[HR] Monster Hunter Saga" badge="14 min" compact={compact} />
				<Card title="[HR] Monster Hunter Saga" badge="14 min" compact={compact} />
				<Card title="[HR] Monster Hunter Saga" badge="14 min" compact={compact} />
				<Card title="[HR] Monster Hunter Saga" badge="14 min" compact={compact} />
			</HStack>
        </PaddedContainer>
	)
}

export default CardRow
