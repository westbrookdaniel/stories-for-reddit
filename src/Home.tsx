import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { FcHome } from 'react-icons/fc'
import { Heading } from 'rebass'
import { Posts } from './types'

import { placeholder, firebase } from './api'

export default function Home() {
	const [posts, setPosts] = useState<Posts[]>()

	useEffect(() => {
		callp()
		callf()
	}, [])

	const callf = async () => {
		const fdata = await firebase.get('users')
		console.log(fdata)
	}
	const callp = async () => {
		const pdata = await placeholder.getPosts()
		setPosts(pdata)
	}

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
