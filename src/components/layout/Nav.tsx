import React, { FunctionComponent } from 'react'
import { HStack, Button, useColorMode, Avatar } from '@chakra-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import NavLink from '../general/NavLink'
import { BsMoon } from 'react-icons/bs'

interface Props {
	onlyLinks?: boolean
	color?: string
	[index: string]: any
}

const Nav: FunctionComponent<Props> = ({ onlyLinks, color, ...props }) => {
	const { toggleColorMode } = useColorMode()

	return (
		<HStack as="nav" justifyContent="flex-end" w="100%" spacing={12} {...props}>
			<NavLink color={color} as={RouterLink} to="/stories">
				Stories
			</NavLink>
			<NavLink color={color} as={RouterLink} to="/subreddits">
				Subreddits
			</NavLink>
			<NavLink color={color} as={RouterLink} to="/style-guide">
				Style Guide
			</NavLink>
			{onlyLinks ? null : (
				<HStack spacing={6}>
					<Button onClick={toggleColorMode} variant="ghost" p={1} size="sm">
						<BsMoon fontSize="1.3rem" />
					</Button>
					<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
				</HStack>
			)}
		</HStack>
	)
}

export default Nav
