import React from 'react'
import SectionContainer from '../../layout/SectionContainer'
import {
	Heading,
	Text,
	Container,
	Box,
	SimpleGrid,
	Image,
	useColorMode,
} from '@chakra-ui/core'
import heroImage from '../../../images/sincerely-media-BfriYg0iOCs-unsplash@2x.png'
import { Link } from 'react-router-dom'

interface Props {}

const Hero = (props: Props) => {
	const { colorMode } = useColorMode()

	return (
		<SectionContainer py={12}>
			<SimpleGrid columns={[1, 1, 1, 2]} alignItems="center">
				<Box maxW="sm">
					<Heading
						as="h1"
						fontSize={['2.5em', '3em', '4em', '4em', '4em']}
						mb={6}
						lineHeight="1.1em"
					>
						About
					</Heading>
					<Text mb={6} color={colorMode === 'dark' ? 'gray.500' : 'gray.700'}>
						Stories for reddit aims to be an accessible and customizable story
						reader for Reddit's medium to long form writing focused communities.
						We aim to provide features that allow you enjoy short stories at any
						time you have available.
					</Text>
				</Box>
				<Box maxW="lg" my={12} alignItems="center" d="flex">
					<Image
						htmlHeight="341"
						htmlWidth="512"
						src={heroImage}
						alt="Segun Adebayo"
						rounded="md"
					/>
				</Box>
			</SimpleGrid>
		</SectionContainer>
	)
}

export default Hero
