import React, { FunctionComponent } from 'react'
import { HStack, Button, useColorMode, Avatar, Stack } from '@chakra-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import NavLink from '../util/NavLink'
import { BsMoon } from 'react-icons/bs'

interface Props {
	onlyLinks?: boolean
	color?: string
	[index: string]: any
}

const Nav: FunctionComponent<Props> = ({
	onlyLinks,
	color,
	justifyContent = 'flex-end',
	direction = 'row',
	spacing = 12,
	...props
}) => {
	const { toggleColorMode } = useColorMode()

	if (onlyLinks) {
		return (
			<Stack
				direction={direction}
				as="nav"
				justifyContent={justifyContent}
				w="100%"
				spacing={spacing}
				{...props}
			>
				<NavLink color={color} as={RouterLink} to="/stories">
					Featured
				</NavLink>
				<NavLink color={color} as={RouterLink} to="/subreddits">
					Subreddits
				</NavLink>
				<NavLink color={color} as={RouterLink} to="/about">
					About
				</NavLink>
			</Stack>
		)
	}

	return (
		<Stack
			direction={direction}
			as="nav"
			justifyContent={justifyContent}
			w="100%"
			spacing={spacing}
			alignItems="center"
			{...props}
		>
			<NavLink color={color} as={RouterLink} to="/stories">
				Featured
			</NavLink>
			<NavLink color={color} as={RouterLink} to="/subreddits">
				Subreddits
			</NavLink>
			<NavLink color={color} as={RouterLink} to="/about">
				About
			</NavLink>
			<Stack direction={direction} alignItems="center" spacing={6}>
				<Button onClick={toggleColorMode} variant="ghost" p={1} size="sm">
					<BsMoon fontSize="1.3rem" />
				</Button>
				<NavLink color={color} as={RouterLink} to="/profile">
					<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
				</NavLink>
			</Stack>
		</Stack>
	)
}

export default Nav
