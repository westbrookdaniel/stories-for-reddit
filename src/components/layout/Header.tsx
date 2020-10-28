import React, { FunctionComponent, useState, useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Input } from '@chakra-ui/core'
import { useColorMode, Box, Heading } from '@chakra-ui/core'
import Logo from '../util/Logo'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './Nav'

export default function Header() {
	const { colorMode } = useColorMode()
	const [logoHover, setLogoHover] = useState(false)

	const handleHover = () => {
		setLogoHover((state) => !state)
	}

	return (
		<Box px={10} py={6} d="flex" alignItems="center" w="100%">
			<Link
				onMouseEnter={handleHover}
				onMouseLeave={handleHover}
				as={RouterLink}
				_hover={{ textDecor: 'none' }}
				to="/"
				_focus={{ outline: 'none' }}
			>
				<Logo colorMode={colorMode} w="34px" minW="34px" />
			</Link>
			<NavSection logoHover={logoHover} />
			<Nav color={colorMode === 'dark' ? 'gray.500' : 'gray.700'} />
		</Box>
	)
}

const NavSection = ({ logoHover }: { logoHover: boolean }) => {
	const navAnimation = {
		initial: { opacity: 0, x: -100 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -100 },
		transition: {
			ease: 'easeOut',
			duration: 0.2,
		},
	}

	return (
		<Box
			w="100%"
			ml={8}
			overflow="hidden"
			d={['none', 'none', 'block']}
		>
			<AnimatePresence exitBeforeEnter>
				{logoHover ? (
					<motion.div {...navAnimation} key={1}>
						<Heading fontFamily="logo" as="h2" fontSize="1.2rem">
							Stories for Reddit
						</Heading>
					</motion.div>
				) : null}
			</AnimatePresence>
		</Box>
	)
}
