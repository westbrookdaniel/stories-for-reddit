import React from 'react'
import logo from '../../images/logo.svg'
import logoWhite from '../../images/logoWhite.svg'
import logoGray from '../../images/logoGray.svg'
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

	if (colorMode === 'gray') {
		return <Image src={logoGray} {...defaultProps} {...props} />
	}

	// TODO: Fix Logo
	return (
		<Image
			src={colorMode === 'dark' ? logoWhite : logo}
			{...defaultProps}
			{...props}
		/>
	)
}
