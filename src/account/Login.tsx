import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import SectionContainer from '../components/layout/SectionContainer'
import {
	Box,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
	Link,
	VStack,
} from '@chakra-ui/core'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import { firebase } from '../api'
import { useToast } from '@chakra-ui/core'
import DefaultButton from '../components/util/DefaultButton'
import { AuthContext } from '../AuthContext'

interface formValuesTypes {
	email: string
	password: string
}

export default function Login() {
	const history = useHistory()
	const toast = useToast()
	const [formValues, setFormValues] = useState<formValuesTypes>({
		email: '',
		password: '',
	})
	const [loading, setLoading] = useState<boolean>(false)
	const { currentUser } = useContext(AuthContext)

	const handleSubmit = (e: any) => {
		e.preventDefault()
		const { email, password } = formValues
		handleLogin(email, password)
	}

	const handleLogin = async (email: string, password: string) => {
		try {
			setLoading(true)
			const res = await firebase.login(email, password)
			toast({
				position: 'bottom-left',
				title: res,
				status: 'success',
				duration: 3000,
				isClosable: true,
			})
		} catch (error) {
			setLoading(false)
			toast({
				position: 'bottom-left',
				title: error,
				status: 'error',
				duration: 3000,
				isClosable: true,
			})
		}
	}

	useEffect(() => {
		if (currentUser) {
			history.push('/profile')
		}
	}, [currentUser])

	const handleChange = (e: any) => {
		const name = e?.target?.name
		const value = e?.target?.value
		setFormValues((oldValues: any) => {
			const newValues = { ...oldValues }
			newValues[name] = value
			return newValues
		})
	}

	return (
		<>
			<Helmet>
				<title>Login | Stories For Reddit</title>
			</Helmet>
			<SectionContainer py={12}>
				<Box maxW="sm">
					<Heading
						as="h1"
						fontSize={['2.5em', '3em', '4em', '4em', '4em']}
						mb={3}
					>
						Login
					</Heading>
					<VStack my={8} spacing={4} align="start">
						<FormControl id="email">
							<FormLabel>Email address</FormLabel>
							<Input
								value={formValues['email']}
								name="email"
								onChange={handleChange}
								type="email"
								w="100%"
							/>
							<FormHelperText>We'll never share your email.</FormHelperText>
						</FormControl>
						<FormControl id="password">
							<FormLabel>Password</FormLabel>
							<Input
								value={formValues['password']}
								name="password"
								onChange={handleChange}
								type="password"
								w="100%"
							/>
						</FormControl>
						<DefaultButton
							isLoading={loading}
							onClick={handleSubmit}
							type="submit"
						>
							Login
						</DefaultButton>
					</VStack>
					<VStack spacing={4} align="start">
						<Link to="/forgotpassword" as={RouterLink}>
							Forgot Password?
						</Link>
						<Link to="/signup" as={RouterLink}>
							Don't have an account? Sign Up
						</Link>
					</VStack>
				</Box>
			</SectionContainer>
		</>
	)
}
