import React from 'react'
import SectionContainer from '../../layout/SectionContainer'
import { Box, Heading, Input, Button, HStack, Badge } from '@chakra-ui/core'
import BigBackArrow from '../../util/BigBackArrow'
import { useHistory } from 'react-router-dom'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/core'
import { MdKeyboardArrowDown } from 'react-icons/md'
import DefaultButton from '../../util/DefaultButton'
import { AnyObject } from '../../../types'

interface Props {
	title: string
	sortListBy?: AnyObject
	[index: string]: any
}

const TopDetails = ({
	title,
	query,
	setQuery,
	sortListBy,
	...props
}: Props) => {
	const history = useHistory()

	return (
		<SectionContainer {...props}>
			<Box maxW="md">
				<BigBackArrow onClick={history.goBack} />
				<Heading as="h1" fontSize="3em" mb={6}>
					{title}
				</Heading>
				<HStack spacing={4}>
					{sortListBy ? (
						<Box>
							<Menu>
								<MenuButton
									as={Button}
									colorScheme="gray"
									variant="outline"
									// color={colorScheme === 'tan' ? 'primary.700' : undefined}
									pr={2}
									size="md"
									// boxShadow="sm"
									rightIcon={<MdKeyboardArrowDown />}
								>
									Sort
								</MenuButton>
								{/* TODO: Active class for current sort */}
								<MenuList>{SortingButtons(sortListBy)}</MenuList>
							</Menu>
						</Box>
					) : null}
					<Input
						w="100%"
						_focus={{ outline: 'none' }}
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Search by title..."
					/>
				</HStack>
			</Box>
		</SectionContainer>
	)
}

const SortingButtons = (sorters: AnyObject) => {
	const ButtonArr: JSX.Element[] = []
	Object.keys(sorters).forEach((key) => {
		const sorter: { method: Function; name: string } = sorters[key]
		ButtonArr.push(
			<MenuItem key={key} onClick={() => sorter.method()}>
				{sorter.name}
			</MenuItem>
		)
	})
	return ButtonArr
}

export default TopDetails
