import React, { FunctionComponent } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Button } from '@chakra-ui/core'

interface Props {
    [index: string]: any
}

const DefaultButton: FunctionComponent<Props> = ({ children, ...props }) => {
	return (
		<Button
			colorScheme="primary"
			pr={2}
			size="md"
            rightIcon={<MdKeyboardArrowRight size={25} />}
            {...props}
		>
			{children}
		</Button>
	)
}

export default DefaultButton
