import React, { FunctionComponent } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Input, Text } from '@chakra-ui/core'
import { HStack, useColorMode, Box } from '@chakra-ui/core'
import NavLink from '../util/NavLink'
import Logo from '../util/Logo'
import Nav from './Nav'

export default function Footer() {
	const { colorMode } = useColorMode()

	return (
		<Box px={12} pt={6} py={10} d="flex" alignItems="center" color={colorMode === 'dark' ? 'gray.500' : 'gray.700'} w="100%">
			<Link
				as={RouterLink}
				_hover={{ textDecor: 'none' }}
				to="/"
				_focus={{ outline: 'none' }}
			>
				<Logo colorMode="gray" fontSize="50px" />
			</Link>
			<HStack w="100%" ml={8} overflow="hidden" spacing={12}>
				<Text>Copyright Stories for Reddit</Text>
				<NavLink as={RouterLink} to="/">
					Attributions
				</NavLink>
				<NavLink as={RouterLink} to="/style-guide">
					Style Guide
				</NavLink>
			</HStack>
			<Nav onlyLinks />
		</Box>
	)
}
