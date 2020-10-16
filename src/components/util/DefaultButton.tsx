import React, { FunctionComponent } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Button, useColorMode } from '@chakra-ui/core'

interface Props {
	colorScheme?: string
	[index: string]: any
}

const DefaultButton: FunctionComponent<Props> = ({
	children,
	colorScheme = 'primary',
	...props
}) => {
	const { colorMode } = useColorMode()

	return (
		<Button
			colorScheme={colorScheme}
			color={colorScheme === 'tan' ? 'primary.700' : undefined}
			pr={2}
			size="md"
			boxShadow="sm"
			rightIcon={<MdKeyboardArrowRight size={25} />}
			{...props}
		>
			{children}
		</Button>
	)
}

export default DefaultButton
