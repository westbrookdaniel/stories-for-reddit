import React, { useEffect, useState } from 'react'

import { placeholder, firebase } from './api'

import { Helmet } from 'react-helmet'
import Hero from './components/Sections/Hero'


export default function Home() {

	// useEffect(() => {
	// 	callp()
	// 	callf()
	// }, [])

	// const callf = async () => {
	// 	const fdata = await firebase.get('users')
	// 	console.log(fdata)
	// }
	// const callp = async () => {
	// 	const pdata = await placeholder.getPosts()
	// 	setPosts(pdata)
	// }

	return (
		<>
			<Helmet>
				<title>Stories For Reddit | Online Reader</title>
			</Helmet>
			<Hero />
		</>
	)
}
