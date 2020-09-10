import React from 'react'
import { AspectRatio, useColorMode, Box, Text, Button, Badge, useTheme } from '@chakra-ui/core'
import { MdMoreHoriz, MdKeyboardArrowRight } from 'react-icons/md'

interface Props {
    title: string,
    time?: string
}

const Card = ({ title, time = "unknown"}: Props) => {
    const { colorMode } = useColorMode()
	const theme = useTheme()
    
	return (
		<AspectRatio
			ratio={1}
			maxW="200px"
			w="100%"
			borderRadius="md"
			bg={colorMode === 'dark' ? 'gray.750' : 'white'}
			boxShadow="md"
		>
			<Box display="flex" flexDirection="column" p={5}>
				<Text
					fontSize="lg"
					mt="1"
					fontWeight="semibold"
					as="h4"
					lineHeight="1.4em"
					flexGrow={1}
				>
					{title}
				</Text>
				<Box w="100%">
					<Box d="flex" alignItems="baseline" pt={3}>
						<Badge borderRadius="full" px="2" colorScheme="primary">
							{time}
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
	)
}

export default Card