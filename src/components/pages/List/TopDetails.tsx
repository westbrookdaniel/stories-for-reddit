import React from 'react'
import SectionContainer from '../../layout/SectionContainer'
import {
	Box,
	Heading,
	Input,
	Button,
	HStack,
	Badge,
	MenuOptionGroup,
	MenuItemOption,
	Stack,
} from '@chakra-ui/core'
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
				<Heading
					as="h1"
					fontSize={['1.8em', '3em', '3em', '3em', '3em']}
					mb={6}
				>
					{title}
				</Heading>
				<Stack direction={['column-reverse', 'row', 'row', 'row']} spacing={[2, 4, 4, 4]}>
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
								<MenuList>
									<MenuOptionGroup
										defaultValue={sortListBy.unsorted.name}
										type="radio"
									>
										{SortingButtons(sortListBy)}
									</MenuOptionGroup>
								</MenuList>
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
				</Stack>
			</Box>
		</SectionContainer>
	)
}

const SortingButtons = (sorters: AnyObject) => {
	const ButtonArr: JSX.Element[] = []
	Object.keys(sorters).forEach((key) => {
		const sorter: { method: Function; name: string } = sorters[key]
		ButtonArr.push(
			<MenuItemOption
				key={key}
				value={sorter.name}
				onClick={() => sorter.method()}
			>
				{sorter.name}
			</MenuItemOption>
		)
	})
	return ButtonArr
}

export default TopDetails
