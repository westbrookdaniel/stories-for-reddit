import React, { FunctionComponent } from 'react'
import {
	HStack,
	Button,
	useColorMode,
	Avatar,
	Stack,
	useDisclosure,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
} from '@chakra-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import NavLink from '../util/NavLink'
import { BsMoon } from 'react-icons/bs'
import { BiMenu } from 'react-icons/bi'

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
	const { isOpen, onOpen, onClose } = useDisclosure()

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
		<>
			<Stack
				direction={direction}
				as="nav"
				justifyContent={justifyContent}
				w="100%"
				spacing={spacing}
				alignItems="center"
				d={['none', 'none', 'none', 'flex']}
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
			<Stack
				direction={direction}
				justifyContent={justifyContent}
				w="100%"
				spacing={spacing}
				alignItems="center"
				d={['flex', 'flex', 'flex', 'none']}
				{...props}
			>
				<Stack direction={direction} alignItems="center" spacing={6}>
					<Button onClick={toggleColorMode} variant="ghost" p={1} size="sm">
						<BsMoon fontSize="1.3rem" />
					</Button>
					<Button onClick={onOpen} variant="ghost" p={1} size="md">
						<BiMenu fontSize="2.2rem" />
					</Button>
					<MenuDrawer onClose={onClose} isOpen={isOpen} />
				</Stack>
			</Stack>
		</>
	)
}

interface DrawerProps {
	onClose: any
	isOpen: boolean
}
const MenuDrawer: FunctionComponent<DrawerProps> = ({ onClose, isOpen }) => {
	return (
		<Drawer placement="top" onClose={onClose} isOpen={isOpen}>
			<DrawerOverlay>
				<DrawerContent>
					<DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
					<DrawerBody>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<p>Some contents...</p>
					</DrawerBody>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	)
}

export default Nav
