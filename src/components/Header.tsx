import React from 'react'
import { Link } from 'react-router-dom'
import { HStack } from '@chakra-ui/core'

export default function Header() {
    return (
        <HStack as="nav" spacing={10}>
           <Link to='/'>Home</Link>
           <Link to='/about'>About</Link>
        </HStack>
    )
}
