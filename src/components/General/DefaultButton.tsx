import React, { FunctionComponent } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Button } from '@chakra-ui/core'

interface Props {
	colorScheme?: string
    [index: string]: any
}

const DefaultButton: FunctionComponent<Props> = ({ children, colorScheme = "primary", ...props }) => {
	return (
		<Button
			colorScheme={colorScheme}
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
