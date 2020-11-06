import { Box, Heading, Stack, Text, useColorMode } from '@chakra-ui/core'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import SectionContainer from './components/layout/SectionContainer'
import DefaultButton from './components/util/DefaultButton'

export default function NotFound() {
	const { colorMode } = useColorMode()
	return (
		<>
			<Helmet>
				<title>Page Not Found | Online Reader</title>
			</Helmet>
			<SectionContainer py={12}>
				<Box>
					<Heading
						as="h1"
						fontSize={['2.5em', '3em', '4em', '4em', '4em']}
						mb={6}
						lineHeight="1.1em"
					>
						Page Not Found
					</Heading>
					<Text
						mb={6}
						maxW="sm"
						color={colorMode === 'dark' ? 'gray.500' : 'gray.700'}
					>
						The page you are looking for could not be found. Either it does not
						exist or an error may have occured.
					</Text>
					<Stack
						direction={['column', 'row', 'row', 'row']}
						spacing={[0, 4, 4, 4]}
					>
						<Link to="/">
							<DefaultButton mb={6}>Back Home</DefaultButton>
						</Link>
					</Stack>
				</Box>
			</SectionContainer>
		</>
	)
}
