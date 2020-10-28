import React, { FunctionComponent } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, Input, Text, Stack } from '@chakra-ui/core'
import { HStack, useColorMode, Box } from '@chakra-ui/core'
import NavLink from '../util/NavLink'
import Logo from '../util/Logo'
import Nav from './Nav'

export default function Footer() {
	const { colorMode } = useColorMode()

	return (
		<Stack
			px={10}
			pt={6}
			py={10}
			spacing={[8, 8, 8, 8, 0]}
			direction={['column', 'column', 'column', 'column', 'row']}
			alignItems={[
				'flex-start',
				'flex-start',
				'flex-start',
				'flex-start',
				'center',
			]}
			color={colorMode === 'dark' ? 'gray.500' : 'gray.700'}
			w="100%"
		>
			<Link
				as={RouterLink}
				_hover={{ textDecor: 'none' }}
				to="/"
				mr={8}
				_focus={{ outline: 'none' }}
			>
				<Logo
					w={['40px', '40px', '40px', '40px', '100%']}
					colorMode="gray"
					fontSize="50px"
				/>
			</Link>
			<Stack
				direction={['column', 'column', 'column', 'column', 'row']}
				w="100%"
				overflow="hidden"
				spacing={[2, 2, 2, 2, 8]}
			>
				<Text>Copyright Stories for Reddit</Text>
				<NavLink as={RouterLink} to="/">
					Attributions
				</NavLink>
			</Stack>
			<Nav
				justifyContent={[
					'flex-start',
					'flex-start',
					'flex-start',
					'flex-start',
					'flex-end',
				]}
				onlyLinks
				direction={['column', 'column', 'column', 'column', 'row']}
				spacing={[8, 8, 8, 8, 12]}
			/>
		</Stack>
	)
}
