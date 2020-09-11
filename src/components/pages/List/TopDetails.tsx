import React from 'react'
import SectionContainer from '../../layout/SectionContainer'
import {
	Box,
	Heading,
	Input,
	Button,
	HStack,
	Badge,
} from '@chakra-ui/core'
import BigBackArrow from '../../util/BigBackArrow'
import { useHistory } from 'react-router-dom'

interface Props {
    title: string
    [index: string]: any
}

const TopDetails = ({ title, ...props }: Props) => {
	const history = useHistory()

	return (
		<SectionContainer {...props}>
			<Box maxW="md">
				<BigBackArrow onClick={history.goBack} />
				<Heading as="h1" fontSize="3em" mb={6}>
					{title}
				</Heading>
				<Input
					w="100%"
					_focus={{ outline: 'none' }}
					placeholder="Search by name or flair..."
				/>
				<HStack pt={3}>
					<Badge borderRadius="full" px="3" fontSize="0.9em" colorScheme="primary">
						SF
					</Badge>
					<Badge borderRadius="full" px="3" fontSize="0.9em" colorScheme="primary">
						FN
					</Badge>
				</HStack>
			</Box>
		</SectionContainer>
	)
}

export default TopDetails
