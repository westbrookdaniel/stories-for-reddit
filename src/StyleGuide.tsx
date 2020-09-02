import React from 'react'
import { Helmet } from 'react-helmet'
import { Heading, Text, VStack, Button, HStack } from '@chakra-ui/core'
import { FcDocument } from 'react-icons/fc'

export default function StyleGuide() {
	return (
		<>
			<Helmet>
				<title>Style Guide | Stories For Reddit</title>
			</Helmet>
			<Heading>
				<FcDocument style={{ display: 'inline-block ' }} /> Style Guide
			</Heading>
			<VStack align="start" maxW="4xl" w="100%" px={5}>
				<Heading>Heading Default</Heading>
				<Heading size="lg">Heading Large</Heading>
				<Heading size="md">Heading Medium</Heading>
				<Heading size="rg">Heading Regular</Heading>
				<Text>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos id,
					enim impedit fugit accusamus earum eligendi saepe distinctio iure!
					Fugiat?
				</Text>
				<HStack>
					<Button colorScheme="primary">Primary</Button>
					<Button>Default</Button>
					<Button variant="ghost">Ghost</Button>
				</HStack>
			</VStack>
		</>
	)
}
