import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { HiExternalLink } from 'react-icons/hi'
import { BsBookmarkFill, BsFillEyeSlashFill } from 'react-icons/bs'
import {
	HStack,
	useColorMode,
	Link,
	Button,
	useTheme,
	useToast,
} from '@chakra-ui/core'
import { AuthContext } from '../../../AuthContext'
import { firebase } from '../../../api'
import { AnyObject } from '../../../types'

interface Props {
	postData: any
}

export default function IconStack({ postData }: Props): ReactElement {
	const { colorMode } = useColorMode()
	const theme = useTheme()
	const { updateUserData, currentUser } = useContext(AuthContext)
	const toast = useToast()

	const [data, setData] = useState({
		itemId: '',
		externalLink: '',
	})
	const [userData, setUserData] = useState<AnyObject | null>(null)

	useEffect(() => {
		firebase
			.getUser(currentUser.uid)
			.then(({ data }) => {
				setUserData(data)
			})
			.catch((error) => {
				toast({
					position: 'bottom-left',
					title: error,
					status: 'error',
					duration: 3000,
					isClosable: true,
				})
			})
	}, [currentUser])

	useEffect(() => {
		if (!postData) return
		if (postData.type === 'subreddits') {
			setData({
				itemId: postData.title,
				externalLink: `https://www.reddit.com/r/${postData.title}`,
			})
		} else if (postData.type === 'stories') {
			setData({
				itemId: postData.id,
				externalLink: postData.url,
			})
		}
	}, [postData])

	const handleSave = async () => {
		try {
			if (!userData) throw 'User data not found'
			const i = userData[postData.type].indexOf(data.itemId)
			if (i >= 0) {
				const newData = [...userData[postData.type]]
				newData.splice(i, 1)
				await updateUserData({
					[postData.type]: newData,
				})
				toast({
					position: 'bottom-left',
					title: `Removed from favourites ${postData.type}`,
					status: 'success',
					duration: 3000,
					isClosable: true,
				})
			} else {
				await updateUserData({
					[postData.type]: [...userData[postData.type], data.itemId],
				})
				toast({
					position: 'bottom-left',
					title: `Saved to favourite ${postData.type}`,
					status: 'success',
					duration: 3000,
					isClosable: true,
				})
			}
		} catch (error) {
			console.error(error)
			toast({
				position: 'bottom-left',
				title: `Failed to update saved ${postData.type}`,
				status: 'error',
				duration: 3000,
				isClosable: true,
			})
		}
	}

	const handleHide = () => {}

	return (
		<HStack spacing={4} mt={2}>
			<Button onClick={handleSave} variant="ghost" p={1} size="sm">
				<BsBookmarkFill
					color={
						colorMode === 'dark'
							? theme.colors.primary[100]
							: theme.colors.primary[500]
					}
					fontSize="1.3rem"
				/>
			</Button>
			<Button onClick={handleHide} variant="ghost" p={1} size="sm">
				<BsFillEyeSlashFill
					color={
						colorMode === 'dark'
							? theme.colors.primary[100]
							: theme.colors.primary[500]
					}
					fontSize="1.3rem"
				/>
			</Button>
			<Link href={data.externalLink} isExternal>
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
