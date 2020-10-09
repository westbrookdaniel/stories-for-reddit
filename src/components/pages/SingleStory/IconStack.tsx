import React, { ReactElement } from 'react'
import { HiExternalLink } from 'react-icons/hi'
import { BsBookmarkFill, BsFillEyeSlashFill } from 'react-icons/bs'
import {
	HStack,
	useColorMode,
	Link,
	Button,
	useTheme,
} from '@chakra-ui/core'

interface Props {
    postData: any
}

export default function IconStack({ postData }: Props): ReactElement {
    const { colorMode } = useColorMode()
	const theme = useTheme()

	return (
		<HStack spacing={4} mt={2}>
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
	)
}
