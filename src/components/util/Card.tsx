import React from 'react'
import {
	AspectRatio,
	useColorMode,
	Box,
	Text,
	Button,
	Badge,
	useTheme,
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

const Card = ({ title, badge = 'unknown', compact = false, link, postData }: Props) => {
	const { colorMode } = useColorMode()
	const theme = useTheme()

	return (
		<AspectRatio
			ratio={compact ? 5 / 4 : 1}
			maxW="200px"
			w="100%"
			borderRadius="md"
			bg={colorMode === 'dark' ? 'gray.750' : 'white'}
			boxShadow="md"
			_hover={{
				boxShadow: 'lg',
			}}
			transition="ease-in-out 0.1s all"
		>
			<Box display="flex" overflow="visible" flexDirection="column" p={5}>
				<Text
					fontSize="lg"
					mt="1"
					fontWeight="semibold"
					as="h4"
					lineHeight="1.4em"
					flexGrow={1}
					alignSelf="flex-start"
				>
					{title}
				</Text>
				<Box w="100%">
					<Box d="flex" alignItems="baseline" pt={3}>
						<Badge borderRadius="full" px="2" colorScheme="primary">
							{badge}
						</Badge>
					</Box>
					<Box
						d="flex"
						mt="2"
						w="100%"
						justifyContent="space-between"
						alignItems="center"
					>
						<MoreDetailsPopover postData={postData} />
						{link ? (
							<Button variant="ghost" p={1} size="sm">
								<Link to={link}>
									<MdKeyboardArrowRight
										size={25}
										color={
											colorMode === 'dark'
												? theme.colors.primary[100]
												: theme.colors.primary[500]
										}
									/>
								</Link>
							</Button>
						) : null}
					</Box>
				</Box>
			</Box>
		</AspectRatio>
	)
}

export default Card
