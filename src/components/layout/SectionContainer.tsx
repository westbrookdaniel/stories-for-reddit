import React, { FunctionComponent } from 'react'
import { Container, Box } from '@chakra-ui/core'

interface Props {
	maxW?: string
	[index: string]: any
}

const SectionContainer: FunctionComponent<Props> = ({
	children,
	maxW = '6xl',
	...props
}) => {
	return (
		<Box {...props}>
			<Container p={8} maxW={maxW}>
				{children}
			</Container>
		</Box>
	)
}

export default SectionContainer
