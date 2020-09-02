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
} from '@chakra-ui/core'
import { FcDocument } from 'react-icons/fc'
import { MdKeyboardArrowRight, MdMoreHoriz } from 'react-icons/md'
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
				<Input focusBorderColor="primary.300" placeholder="Input Text Here" />
				<AspectRatio
					ratio={1}
					maxW="200px"
					w="100%"
					borderRadius="md"
					boxShadow="md"
				>
					<VStack p={5} justify="space-between">
						<Heading
                            fontSize="lg"
							mt="1"
							fontWeight="semibold"
                            as="h4"
                            lineHeight="1.4em"
						>
							[HR] Monster Hunter Saga
						</Heading>
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
								<MdMoreHoriz fontSize={25} color="primary.500" />
								<MdKeyboardArrowRight size={25} color="primary.500" />
							</Box>
						</Box>
					</VStack>
				</AspectRatio>
			</VStack>
		</>
	)
}
