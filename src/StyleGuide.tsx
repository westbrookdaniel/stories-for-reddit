import React from 'react'
import { Helmet } from 'react-helmet'
import {
	Heading,
	Text,
	VStack,
	Button,
	HStack,
	Input,
	Box,
	Badge,
	AspectRatio,
	useColorMode
} from '@chakra-ui/core'
import { FcDocument } from 'react-icons/fc'
import { MdKeyboardArrowRight, MdMoreHoriz } from 'react-icons/md'
import { useTheme } from '@chakra-ui/core'
import SectionContainer from './components/layout/SectionContainer'

export default function StyleGuide() {
	const { colorMode }: any = useColorMode()
	const theme = useTheme()
	return (
		<SectionContainer>
			<Helmet>
				<title>Style Guide | Stories For Reddit</title>
			</Helmet>
			<VStack align="start" maxW="4xl" w="100%" px={5} spacing={5}>
				<Heading>Heading Default</Heading>
				<Heading size="lg">Heading Large</Heading>
				<Heading size="md">Heading Medium</Heading>
				<Heading size="rg">Heading Regular</Heading>
				<Text color={colorMode === 'dark' ? 'gray.400' : 'gray.700'}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos id,
					enim impedit fugit accusamus earum eligendi saepe distinctio iure!
					Fugiat?
				</Text>
				<HStack>
					<Button
						colorScheme="primary"
						pr={2}
						size="md"
						rightIcon={<MdKeyboardArrowRight size={25} />}
					>
						Primary
					</Button>
					<Button>Default</Button>
					<Button variant="ghost">Ghost</Button>
				</HStack>
				<Input focusBorderColor="primary.200" placeholder="Input Text Here" />
				<AspectRatio
					ratio={1}
					maxW="200px"
					w="100%"
					borderRadius="md"
					bg={colorMode === 'dark' ? 'gray.750' : 'white'}
					boxShadow="md"
				>
					<Box
						display="flex"
						flexDirection="column"
						p={5}
					>
						<Text
							fontSize="lg"
							mt="1"
							fontWeight="semibold"
							as="h4"
							lineHeight="1.4em"
							flexGrow={1}
						>
							[HR] Monster Hunter Saga
						</Text>
						<Box w="100%">
							<Box d="flex" alignItems="baseline" pt={3}>
								<Badge borderRadius="full" px="2" colorScheme="primary">
									14 min
								</Badge>
							</Box>
							<Box
								d="flex"
								mt="2"
								w="100%"
								justifyContent="space-between"
								alignItems="center"
							>
								<Button variant="ghost" p={1} size="sm">
									<MdMoreHoriz
										fontSize={25}
										color={
											colorMode === 'dark'
												? theme.colors.primary[100]
												: theme.colors.primary[500]
										}
									/>
								</Button>
								<Button variant="ghost" p={1} size="sm">
									<MdKeyboardArrowRight
										size={25}
										color={
											colorMode === 'dark'
												? theme.colors.primary[100]
												: theme.colors.primary[500]
										}
									/>
								</Button>
							</Box>
						</Box>
					</Box>
				</AspectRatio>
			</VStack>
		</SectionContainer>
	)
}
