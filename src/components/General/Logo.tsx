import React from 'react'
import logo from '../../images/logo.svg'
import logoWhite from '../../images/logoWhite.svg'
import { Image } from '@chakra-ui/core'

interface Props {
	colorMode: string
	[index: string]: any
}

export default function Logo({ colorMode, ...props }: Props) {
	const defaultProps = {
		style: {
			height: 'min-content',
		},
	}
	return (
		<Image
			src={colorMode === 'dark' ? logoWhite : logo}
			{...defaultProps}
			{...props}
		/>
	)
}
