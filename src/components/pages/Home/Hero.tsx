import React, { useContext } from 'react'
import SectionContainer from '../../layout/SectionContainer'
import {
	Heading,
	Text,
	Container,
	Box,
	SimpleGrid,
	Image,
	useColorMode,
	HStack,
	Stack,
} from '@chakra-ui/core'
import DefaultButton from '../../util/DefaultButton'
import heroImage from '../../../images/christin-hume-k2Kcwkandwg-unsplash@2x.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../AuthContext'

interface Props {}

const Hero = (props: Props) => {
	const { colorMode } = useColorMode()
	const { currentUser } = useContext(AuthContext)

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
						Stories for Reddit
					</Heading>
					<Text mb={6} color={colorMode === 'dark' ? 'gray.500' : 'gray.700'}>
						Discover and read exciting new short stories made by Reddit's many
						passionate writing focused communties.
					</Text>
					<Stack
						direction={['column', 'row', 'row', 'row']}
						spacing={[0, 4, 4, 4]}
					>
						<Link to="/stories">
							<DefaultButton mb={6}>Discover Stories </DefaultButton>
						</Link>
						<Link to={currentUser ? '/profile' : '/login'}>
							<DefaultButton colorScheme="tan" mb={6}>
								{currentUser ? 'Profile' : 'Login'}
							</DefaultButton>
						</Link>
					</Stack>
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
