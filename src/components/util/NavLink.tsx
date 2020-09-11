import React, { FunctionComponent } from 'react'
import { Link } from '@chakra-ui/core'


interface NavLinkProps {
	[index: string]: any
}

const NavLink: FunctionComponent<NavLinkProps> = ({ children, ...props }) => {
	return (
		<Link _focus={{ outline: 'none' }} {...props}>
			{children}
		</Link>
	)
}
export default NavLink
