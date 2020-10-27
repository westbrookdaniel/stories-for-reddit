import React, { FunctionComponent } from 'react'
import { Box, useColorMode } from '@chakra-ui/core'

interface Props {
	[index: string]: any
}

const PaddedContainer: FunctionComponent<Props> = ({ children, ...props }) => {
	const { colorMode } = useColorMode()
	return (
		<Box
			px={[8, 8, 16]}
			py={[10, 10, 16]}
			bg={colorMode === 'dark' ? 'tan.950' : 'tan.400'}
			rounded="md"
			{...props}
		>
			{children}
		</Box>
	)
}

export default PaddedContainer
