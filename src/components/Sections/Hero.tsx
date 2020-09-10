import React from 'react'
import SectionContainer from '../layout/SectionContainer'
import {
	Heading,
	Text,
	Container,
	Box,
	SimpleGrid,
	Image,
} from '@chakra-ui/core'
import DefaultButton from '../General/DefaultButton'
import heroImage from '../../images/christin-hume-k2Kcwkandwg-unsplash@2x.png'

interface Props {}

const Hero = (props: Props) => {
	return (
		<SectionContainer maxW="6xl" py={12}>
			<SimpleGrid columns={2} alignItems="center">
				<Box maxW="sm">
					<Heading as="h1" fontSize="4em" mb={6}>
						Stories for Reddit
					</Heading>
					<Text mb={6}>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium,
					</Text>
					<DefaultButton mb={6}>Discover Stories </DefaultButton>
				</Box>
				<Box boxSize="lg" alignItems="center" d="flex">
					<Image src={heroImage} alt="Segun Adebayo" />
				</Box>
			</SimpleGrid>
		</SectionContainer>
	)
}

export default Hero
