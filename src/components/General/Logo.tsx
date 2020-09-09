import React from 'react'
import { FcDvdLogo, FcCdLogo } from 'react-icons/fc'

interface Props {
	colorMode: string
	[index: string]: any
}

export default function Logo({ colorMode, ...props }: Props) {
	const defaultProps = {
		style: {
			height: "min-content" 
		}
	}

	console.log(props)
	return colorMode === 'dark' ? (
		<FcDvdLogo {...defaultProps} {...props} />
	) : (
		<FcCdLogo {...defaultProps}{...props} />
	)
}
