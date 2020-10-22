import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import SectionContainer from '../components/layout/SectionContainer'
import {
	Alert,
	AlertIcon,
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

interface formValuesTypes {
	email: string
}

export default function ForgotPassword() {
	const toast = useToast()
	const [formValues, setFormValues] = useState<formValuesTypes>({
		email: '',
	})
	const [loading, setLoading] = useState<boolean>(false)
	const [success, setSuccess] = useState<null | string>(null)

	const handleSubmit = (e: any) => {
		e.preventDefault()
		const { email } = formValues
		handleReset(email)
	}

	const handleReset = async (email: string) => {
		try {
			setSuccess(null)
			setLoading(true)
			const res = await firebase.resetPassword(email)
			setSuccess(res)
			setLoading(false)
		} catch (error) {
			setSuccess(null)
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
				<title>Forgot Password | Stories For Reddit</title>
			</Helmet>
			<SectionContainer py={12}>
				<Box maxW="sm">
					<Heading as="h1" fontSize="4em" mb={6}>
						Forgot Password
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
							<FormHelperText>The email you used for your account.</FormHelperText>
						</FormControl>
						<DefaultButton
							isLoading={loading}
							onClick={handleSubmit}
							type="submit"
						>
							Send Reset Email
						</DefaultButton>
						{success && (
							<Alert status="success" borderRadius="md">
								<AlertIcon />
								{success}
							</Alert>
						)}
					</VStack>
					<VStack spacing={4} align="start">
						<Link to="/login" as={RouterLink}>
							Already have an account? Login
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
