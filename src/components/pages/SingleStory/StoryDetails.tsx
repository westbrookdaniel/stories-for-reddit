import React, { ReactElement } from 'react'
import { HiExternalLink } from 'react-icons/hi'
import { BsBookmarkFill, BsFillEyeSlashFill } from 'react-icons/bs'
import {
	Box,
	Heading,
	HStack,
	SkeletonText,
	Text,
	useColorMode,
	Link,
	Button,
	useTheme,
} from '@chakra-ui/core'

interface Props {
	postData: any
}

export default function StoryDetails({ postData }: Props): ReactElement {
	const { colorMode } = useColorMode()
	const theme = useTheme()

	return (
		<>
			<Heading color={colorMode === 'dark' ? 'white' : 'primary.700'} mb={4}>
				{postData?.title}
			</Heading>
			<Text color={colorMode === 'dark' ? 'primary.100' : 'primary.500'}>
				From {postData?.subreddit_name_prefixed}
			</Text>
			<Text color={colorMode === 'dark' ? 'primary.100' : 'primary.500'}>
				By {postData?.author.name}
			</Text>
			<HStack spacing={4} mt={3}>
				<Link href="#" isExternal>
					<Button variant="ghost" p={1} size="sm">
						<BsBookmarkFill
							color={
								colorMode === 'dark'
									? theme.colors.primary[100]
									: theme.colors.primary[500]
							}
							fontSize="1.3rem"
						/>
					</Button>
				</Link>
				<Link href="#" isExternal>
					<Button variant="ghost" p={1} size="sm">
						<BsFillEyeSlashFill
							color={
								colorMode === 'dark'
									? theme.colors.primary[100]
									: theme.colors.primary[500]
							}
							fontSize="1.3rem"
						/>
					</Button>
				</Link>
				<Link href={postData?.url} isExternal>
					<Button variant="ghost" p={1} size="sm">
						<HiExternalLink
							color={
								colorMode === 'dark'
									? theme.colors.primary[100]
									: theme.colors.primary[500]
							}
							fontSize="1.3rem"
						/>
					</Button>
				</Link>
			</HStack>
		</>
	)
}
