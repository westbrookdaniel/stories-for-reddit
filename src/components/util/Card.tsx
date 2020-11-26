import React from 'react'
import {
	AspectRatio,
	useColorMode,
	Box,
	Text,
	Button,
	Badge,
	useTheme,
	HStack,
	Link as StyleLink,
} from '@chakra-ui/core'
import { MdMoreHoriz, MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import MoreDetailsPopover from './MoreDetailsPopover'

interface Props {
	title?: string
	badge?: string
	link?: string
	postData?: any
	compact?: boolean
}

const Card = ({ title, badge = 'unknown', link, postData }: Props) => {
	const { colorMode } = useColorMode()
	const theme = useTheme()

	return (
		<AspectRatio
			ratio={9 / 4}
			minH="130px"
			maxW="100%"
			w="300px"
			borderRadius="md"
			bg={colorMode === 'dark' ? 'gray.750' : 'white'}
			boxShadow="md"
			_hover={{
				boxShadow: 'lg',
			}}
			transition="ease-in-out 0.1s all"
		>
			<Box
				display="flex"
				className="important-visible"
				flexDirection="column"
				p={5}
			>
				{link ? (
					<>
						<StyleLink
							flexGrow={1}
							_hover={{ textDecoration: 'none' }}
							_focus={{ outline: 'none' }}
							alignSelf="flex-start"
							as={Link}
							to={link}
						>
							<Text
								fontSize="lg"
								mt="1"
								fontWeight="semibold"
								as="h4"
								lineHeight="1.4em"
							>
								{title}
							</Text>
						</StyleLink>
						<Box w="100%">
							<Box
								d="flex"
								w="100%"
								justifyContent="space-between"
								alignItems="center"
							>
								<MoreDetailsPopover postData={postData} />
								<HStack alignItems="center">
									<Badge borderRadius="full" px="2" colorScheme="primary">
										{badge}
									</Badge>
									<Link to={link}>
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
									</Link>
								</HStack>
							</Box>
						</Box>
					</>
				) : null}
			</Box>
		</AspectRatio>
	)
}

export default Card
