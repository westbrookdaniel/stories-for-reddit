import React, { FunctionComponent } from 'react'
import { Container, Box } from '@chakra-ui/core'

interface Props {
	maxW?: string
	[index: string]: any
}

const SectionContainer: FunctionComponent<Props> = ({
	children,
	maxW = '6xl',
	p = 8,
	...props
}) => {
	return (
		<Box {...props}>
			<Container p={p} maxW={maxW}>
				{children}
			</Container>
		</Box>
	)
}

export default SectionContainer
