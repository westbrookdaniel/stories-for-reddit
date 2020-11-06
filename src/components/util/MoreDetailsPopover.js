import {
	Box,
	Button,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Portal,
	useColorMode,
	useTheme,
} from '@chakra-ui/core'
import React, { useRef } from 'react'
import { MdMoreHoriz } from 'react-icons/md'
import IconStack from '../pages/SingleStory/IconStack'

export default function MoreDetailsPopover({ postData }) {
	const { colorMode } = useColorMode()
	const theme = useTheme()
	const initRef = useRef()

	return (
		<Popover returnFocus={false} initialFocusRef={initRef} placement="bottom">
			{({ isOpen, onClose }) => (
				<>
					<PopoverTrigger>
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
					</PopoverTrigger>
					{/* Checking isOpen isn't required but dramatically improves performance */}
					<div className="popover-wrapper">
						{isOpen && (
							<PopoverContent p={0} w="auto" m={0} boxShadow="lg">
								<PopoverBody pb={4}>
									<Box display="none" ref={initRef}></Box>
									<IconStack postData={postData} />
								</PopoverBody>
							</PopoverContent>
						)}
					</div>
				</>
			)}
		</Popover>
	)
}
