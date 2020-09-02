import React from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { FcHome } from 'react-icons/fc'
import { Heading } from '@chakra-ui/core'
import { Posts } from './types'

interface Props {
    posts: Posts[] | undefined
}

export default function Home({ posts }: Props) {
	return (
		<>
			<Helmet>
				<title>Stories For Reddit | Online Reader</title>
			</Helmet>
			<Heading>
				<FcHome style={{ display: 'inline-block ' }} /> Hello World
			</Heading>
			{posts ? (
				<motion.pre
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					style={{ maxWidth: '100%', fontSize: '0.7rem' }}
				>
					{JSON.stringify(posts[0], null, 2)}
				</motion.pre>
			) : null}
		</>
	)
}
