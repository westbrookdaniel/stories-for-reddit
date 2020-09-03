import React from 'react'
import { Link } from 'react-router-dom'
import { HStack, Button, useColorMode } from '@chakra-ui/core'

export default function Header() {
    const { toggleColorMode } = useColorMode()

    return (
        <HStack as="nav" spacing={10}>
           <Link to='/'>Home</Link>
           <Link to='/style-guide'>Style Guide</Link>
           <Button onClick={toggleColorMode}>Color Mode</Button>
        </HStack>
    )
}
