import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { HiExternalLink } from 'react-icons/hi'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { MdBookmark, MdBookmarkBorder } from 'react-icons/md'
import {
	HStack,
	useColorMode,
	Link,
	Button,
	useTheme,
	useToast,
} from '@chakra-ui/core'
import { AuthContext } from '../../../AuthContext'
import { firebase, reddit } from '../../../api'
import { AnyObject } from '../../../types'

interface Props {
	postData: any
}

export default function IconStack({ postData }: Props): ReactElement {
	const { colorMode } = useColorMode()
	const theme = useTheme()
	const { updateUserData, userData, currentUser } = useContext(AuthContext)
	const toast = useToast()

	const [data, setData] = useState({
		itemId: '',
		externalLink: '',
	})

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
			if (currentUser === null) throw 'Login to save stories'
			if (!userData) throw 'User data not found'
			const i = userData && userData[postData.type].indexOf(data.itemId)
			if (i >= 0 && userData) {
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
				if (userData) {
					await updateUserData({
						[postData.type]: [...userData[postData.type], data.itemId],
					})	
				}
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

	const isInUserData = () => userData && userData[postData.type].indexOf(data.itemId) >= 0

	const handleHide = async () => {
		try {
			const res = await reddit.hideStoryById(postData.id)
			toast({
				position: 'bottom-left',
				title: res,
				status: 'success',
				duration: 3000,
				isClosable: true,
			})
		} catch (error) {
			toast({
				position: 'bottom-left',
				title: error,
				status: 'error',
				duration: 3000,
				isClosable: true,
			})
		}
	}

	return (
		<HStack spacing={4} mt={2}>
			<Button onClick={handleSave} variant="ghost" p={1} size="sm">
				{isInUserData() ? (
					<MdBookmark
						color={
							colorMode === 'dark'
								? theme.colors.primary[100]
								: theme.colors.primary[500]
						}
						fontSize="1.3rem"
					/>
				) : (
					<MdBookmarkBorder
						color={
							colorMode === 'dark'
								? theme.colors.primary[100]
								: theme.colors.primary[500]
						}
						fontSize="1.3rem"
					/>
				)}
			</Button>
			{postData.type === 'stories' && (
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
			)}
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
