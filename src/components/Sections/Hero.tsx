import React from 'react'
import SectionContainer from '../layout/SectionContainer'
import {
	Heading,
	Text,
	Container,
	Box,
	SimpleGrid,
	Image,
	useColorMode,
} from '@chakra-ui/core'
import DefaultButton from '../general/DefaultButton'
import heroImage from '../../images/christin-hume-k2Kcwkandwg-unsplash@2x.png'

interface Props {}

const Hero = (props: Props) => {
	const { colorMode } = useColorMode()

	return (
		<SectionContainer py={12}>
			<SimpleGrid columns={[1, 1, 1, 2]} alignItems="center">
				<Box maxW="sm">
					<Heading as="h1" fontSize="4em" mb={6}>
						Stories for Reddit
					</Heading>
					<Text mb={6} color={colorMode === 'dark' ? 'gray.500' : 'gray.700'}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium,
					</Text>
					<DefaultButton mb={6}>Discover Stories </DefaultButton>
				</Box>
				<Box maxW="lg" my={12} alignItems="center" d="flex">
					<Image src={heroImage} alt="Segun Adebayo" />
				</Box>
			</SimpleGrid>
		</SectionContainer>
	)
}

export default Hero
