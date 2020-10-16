import { useEffect, useState } from 'react'
import { useFilter } from './useFilter'

export const useList = (source: any) => {
	const [query, setQuery] = useState('')
	const filter = useFilter(source, query)
	const [firstLoaded, setFirstLoaded] = useState(false)

	useEffect(() => {
		if (!firstLoaded) {
			if (source && filter.length !== 0) {
				setFirstLoaded(true)
			}
		}
	}, [source, filter, firstLoaded])

	return { query, setQuery, filter, firstLoaded }
}

export const useListWithoutFilter = (source: any) => {
	const [firstLoaded, setFirstLoaded] = useState(false)

	useEffect(() => {
		if (!firstLoaded) {
			if (source) {
				setFirstLoaded(true)
			}
		}
	}, [source, firstLoaded])

	return { firstLoaded }
}
