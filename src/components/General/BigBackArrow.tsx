import React from 'react'
import { Button, useTheme, useColorMode } from '@chakra-ui/core'
import { MdKeyboardArrowLeft } from 'react-icons/md'

interface Props {
	[index: string]: any
}

const BigBackArrow = (props: Props) => {
    const { colorMode } = useColorMode()
    const theme = useTheme()

	return (
		<Button variant="ghost" p={1} size="lg" mb={4} {...props}>
			<MdKeyboardArrowLeft
				size={42}
				color={
					colorMode === 'dark'
						? theme.colors.primary[100]
						: theme.colors.primary[500]
				}
			/>
		</Button>
	)
}

export default BigBackArrow
