import React, { FunctionComponent, useContext } from 'react'
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
	DrawerCloseButton,
	Flex,
	Link,
	DrawerFooter,
	Box,
	Text,
	Spinner,
} from '@chakra-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import NavLink from '../util/NavLink'
import { BsMoon } from 'react-icons/bs'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import Logo from '../util/Logo'
import { AuthContext } from '../../AuthContext'
import DefaultButton from '../util/DefaultButton'

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
	onClick,
	...props
}) => {
	const { toggleColorMode } = useColorMode()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { currentUser } = useContext(AuthContext)

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
				<NavLink color={color} as={RouterLink} to="/stories" onClick={onClick}>
					Featured
				</NavLink>
				<NavLink
					color={color}
					as={RouterLink}
					to="/subreddits"
					onClick={onClick}
				>
					Subreddits
				</NavLink>
				<NavLink color={color} as={RouterLink} to="/about" onClick={onClick}>
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
					{currentUser === undefined ? (
						<Box className="suspense-spinner" w="40px">
							<Spinner color="primary.500" />
						</Box>
					) : currentUser !== null ? (
						<NavLink as={RouterLink} to="/profile">
							<Avatar name={currentUser?.email && currentUser.email} />
						</NavLink>
					) : (
						<NavLink as={RouterLink} to="/login" _hover={{ textDecoration: 'none' }}>
							<DefaultButton>Login</DefaultButton>
						</NavLink>
					)}
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
					<Button onClick={onOpen} variant="ghost" p={1} size="md">
						<IoMdMenu fontSize="2rem" />
					</Button>
					<MenuDrawer
						toggleColorMode={toggleColorMode}
						onClose={onClose}
						isOpen={isOpen}
					/>
				</Stack>
			</Stack>
		</>
	)
}

interface DrawerProps {
	onClose: any
	isOpen: boolean
	toggleColorMode: any
}
const MenuDrawer: FunctionComponent<DrawerProps> = ({
	onClose,
	isOpen,
	toggleColorMode,
}) => {
	const { colorMode } = useColorMode()
	const { currentUser } = useContext(AuthContext)

	return (
		<Drawer placement="top" onClose={onClose} isOpen={isOpen}>
			<DrawerOverlay>
				<DrawerContent>
					<Flex px={10} py={6} alignItems="center">
						<Flex flexGrow={1} alignItems="center" minH="50px">
							<Link
								onClick={onClose}
								as={RouterLink}
								_hover={{ textDecor: 'none' }}
								to="/"
								_focus={{ outline: 'none' }}
							>
								<Logo colorMode={colorMode} w="34px" minW="34px" />
							</Link>
						</Flex>
						<Button onClick={onClose} variant="ghost" p={1} size="md">
							<IoMdClose fontSize="2rem" />
						</Button>
					</Flex>
					<DrawerBody px={10}>
						<Nav
							onClick={onClose}
							onlyLinks
							justifyContent="flex-start"
							direction="column"
							spacing={4}
						/>
					</DrawerBody>
					<DrawerFooter px={10} justifyContent="flex-start" my={8}>
						<HStack alignItems="flex-end" spacing={6}>
							<Box>
								<Flex h="40px" alignItems="center">
									<Button
										onClick={toggleColorMode}
										variant="ghost"
										p={1}
										size="md"
									>
										<BsMoon fontSize="2rem" />
									</Button>
								</Flex>
								<Text mt={2}>Change Theme</Text>
							</Box>
							<Box>
								{currentUser === undefined ? (
									<Box className="suspense-spinner" w="40px">
										<Spinner color="primary.500" />
									</Box>
								) : currentUser !== null ? (
									<>
										<Flex h="40px" alignItems="center">
											<NavLink onClick={onClose} as={RouterLink} to="/profile">
												<Avatar
													size="sm"
													name={currentUser?.email && currentUser.email}
												/>
											</NavLink>
										</Flex>
										<Text mt={2}>My Profile</Text>
									</>
								) : (
									<NavLink as={RouterLink} onClick={onClose} to="/login">
										<DefaultButton>Login</DefaultButton>
									</NavLink>
								)}
							</Box>
						</HStack>
					</DrawerFooter>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	)
}

export default Nav
