import React, { FunctionComponent } from 'react'
import { Container } from '@chakra-ui/core'

interface Props {
	[index: string]: any
}

const SectionContainer: FunctionComponent<Props> = ({ children, maxW = '4xl', ...props }) => {
	return (
		<Container p={8} maxW={maxW} {...props}>
			{children}
		</Container>
	)
}

export default SectionContainer
