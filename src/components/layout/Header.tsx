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
import Logo from '../general/Logo'
import { AnimatePresence, motion } from 'framer-motion'
import { BsMoon } from 'react-icons/bs'
import NavLink from '../general/NavLink'
import Nav from './Nav'

export default function Header() {
	const { colorMode } = useColorMode()
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
			<Nav color={colorMode === 'dark' ? 'gray.500' : 'gray.700'} />
		</Box>
	)
}
