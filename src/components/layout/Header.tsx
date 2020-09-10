import React, { FunctionComponent, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Input } from '@chakra-ui/core'
import {
	HStack,
	Button,
	useColorMode,
	Box,
	Heading,
	Avatar,
} from '@chakra-ui/core'
import { FcCdLogo, FcDvdLogo } from 'react-icons/fc'
import Logo from '../General/Logo'
import { AnimatePresence, motion } from 'framer-motion'
import { BsMoon } from 'react-icons/bs'

export default function Header() {
	const { toggleColorMode, colorMode } = useColorMode()
	const [logoHover, setLogoHover] = useState(false)

	const handleHover = () => {
		setLogoHover((state) => !state)
	}

	const animation = {
		initial: { opacity: 0, x: -100 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -100 },
		transition: {
			ease: 'easeOut',
			duration: 0.2,
		},
	}

	return (
		<Box px={12} py={6} d="flex" alignItems="center" w="100%">
			<Link
				onMouseEnter={handleHover}
				onMouseLeave={handleHover}
				as={RouterLink}
				_hover={{ textDecor: 'none' }}
				to="/"
				_focus={{ outline: 'none' }}
			>
				<Logo colorMode={colorMode} fontSize="50px" />
			</Link>
			<Box w="100%" ml={8} overflow="hidden">
				<AnimatePresence exitBeforeEnter>
					{logoHover ? (
						<motion.div {...animation} key={1}>
							<Heading as="h2" fontSize="1.2rem">
								Stories for Reddit
							</Heading>
						</motion.div>
					) : (
						<motion.div {...animation} key={2}>
							<Input
								_focus={{ outline: 'none' }}
								placeholder="Search by name or flair..."
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</Box>
			<HStack as="nav" justifyContent="flex-end" w="100%" spacing={12}>
				<NavLink as={RouterLink} to="/">
					Home
				</NavLink>
				<NavLink as={RouterLink} to="/style-guide">
					Style Guide
				</NavLink>
				<HStack spacing={6}>
					<Button onClick={toggleColorMode} variant="ghost" p={1} size="sm">
						<BsMoon fontSize="1.3rem" />
					</Button>
					<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
				</HStack>
			</HStack>
		</Box>
	)
}

interface NavLinkProps {
	as: any
	to: string
}

const NavLink: FunctionComponent<NavLinkProps> = ({ children, ...props }) => {
	return (
		<Link _focus={{ outline: 'none' }} {...props}>
			{children}
		</Link>
	)
}
