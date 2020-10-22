import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import SectionContainer from '../components/layout/SectionContainer'
import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Box,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
	Link,
	useToast,
	VStack,
} from '@chakra-ui/core'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import DefaultButton from '../components/util/DefaultButton'
import { firebase } from '../api'
import { AuthContext } from '../AuthContext'

interface formValuesTypes {
	email: string
	password: string
	'confirm-password': string
}

export default function Update() {
	const history = useHistory()
	const { currentUser, updateAccount } = useContext(AuthContext)
	const toast = useToast()
	const [formValues, setFormValues] = useState<formValuesTypes>({
		email: '',
		password: '',
		'confirm-password': '',
	})
	const [error, setError] = useState<null | string>(null)
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		if (currentUser) {
			setFormValues((oldValues: any) => {
				const newValues = { ...oldValues }
				newValues.email = currentUser?.email
				return newValues
			})
		}
	}, [currentUser])

	const handleSubmit = (e: any) => {
		e.preventDefault()
		if (formValues.password !== formValues['confirm-password']) {
			setError('Passwords do not match')
		} else {
			setError(null)
			const { email, password } = formValues
			handleUpdate(email, password)
		}
	}

	const handleUpdate = async (email: string, password: string) => {
		try {
			setLoading(true)
			const res = await updateAccount(email, password)
			toast({
				position: 'bottom-left',
				title: res,
				status: 'success',
				duration: 3000,
				isClosable: true,
			})
			setLoading(false)
			history.push('/profile')
		} catch (error) {
			setLoading(false)
			setError(error)
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
				<title>Update Details | Stories For Reddit</title>
			</Helmet>
			<SectionContainer py={12}>
				<Box maxW="sm">
					<Heading as="h1" fontSize="4em" mb={6}>
						Update
					</Heading>
					<VStack my={8} spacing={4} align="start">
						<FormControl id="email">
							<FormLabel>New Email address</FormLabel>
							<Input
								value={formValues['email']}
								name="email"
								onChange={handleChange}
								type="email"
								w="100%"
							/>
						</FormControl>
						<FormControl id="password">
							<FormLabel>New Password</FormLabel>
							<Input
								value={formValues['password']}
								name="password"
								onChange={handleChange}
								type="password"
								w="100%"
								placeholder="Leave blank to keep the same"
							/>
						</FormControl>
						<FormControl id="confirm-password">
							<FormLabel>Confirm Password</FormLabel>
							<Input
								value={formValues['confirm-password']}
								name="confirm-password"
								onChange={handleChange}
								type="password"
								w="100%"
								placeholder="Leave blank to keep the same"
							/>
						</FormControl>
						<DefaultButton
							isLoading={loading}
							onClick={handleSubmit}
							type="submit"
						>
							Update
						</DefaultButton>
						{error && (
							<Alert status="error" borderRadius="md">
								<AlertIcon />
								{error}
							</Alert>
						)}
					</VStack>
					<Link to="/profile" as={RouterLink}>
						Cancel Updating Details
					</Link>
				</Box>
			</SectionContainer>
		</>
	)
}
