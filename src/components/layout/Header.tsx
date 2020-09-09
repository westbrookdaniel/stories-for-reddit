import React from 'react'
import { Link } from 'react-router-dom'
import { HStack, Button, useColorMode, Box, Heading } from '@chakra-ui/core'
import { FcCdLogo, FcDvdLogo } from 'react-icons/fc'
import Logo from '../General/Logo'

export default function Header() {
	const { toggleColorMode, colorMode } = useColorMode()

	return (
		<Box d="flex" alignItems="center" w="100%">
            <Logo colorMode={colorMode} fontSize="8rem" />
            <Heading as="h2" fontSize="1.2rem" w="100%" ml={8}>Stories for Reddit</Heading>
			<HStack as="nav" justifyContent="flex-end" w="100%" spacing={10}>
				<Link to="/">Home</Link>
				<Link to="/style-guide">Style Guide</Link>
				<Button onClick={toggleColorMode}>Color Mode</Button>
			</HStack>
		</Box>
	)
}
