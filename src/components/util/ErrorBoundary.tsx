import { Box, Heading, Stack, Text, useColorMode } from '@chakra-ui/core'
import React, { ReactElement } from 'react'
import { Helmet } from 'react-helmet'
import SectionContainer from '../layout/SectionContainer'
import DefaultButton from './DefaultButton'
import { Link } from 'react-router-dom'

interface BoundaryState {
	hasError: boolean
}
interface ErrorInfo {
	componentStack: string
}

export default class ErrorBoundary extends React.Component<{}, BoundaryState> {
	constructor(props: {}) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.error(error, info)
	}

	render() {
		if (this.state.hasError) {
			return <ErrorPage />
		}
		return this.props.children
	}
}

function ErrorPage() {
	const { colorMode } = useColorMode()
	return (
		<>
			<Helmet>
				<title>Error | Online Reader</title>
			</Helmet>
			<SectionContainer py={12}>
				<Box>
					<Heading
						as="h1"
						fontSize={['2.5em', '3em', '4em', '4em', '4em']}
						mb={6}
						lineHeight="1.1em"
					>
						Error
					</Heading>
					<Text
						mb={6}
						maxW="sm"
						color={colorMode === 'dark' ? 'gray.500' : 'gray.700'}
					>
						An error has occured. Please refresh and try again.
					</Text>
					<Stack
						direction={['column', 'row', 'row', 'row']}
						spacing={[0, 4, 4, 4]}
					>
							<DefaultButton mb={6} onClick={() => location.reload()}>Refresh</DefaultButton>
					</Stack>
				</Box>
			</SectionContainer>
		</>
	)
}
