import { useEffect, useState } from 'react'

export const useFilter = (array: any[] | null, query: string) => {
	const [filter, setFilter] = useState<any[]>([])
	
	useEffect(() => {
		if (array) {
			const out: any[] = []
			array.forEach((item) => {
				if (item.title?.toLowerCase().includes(query.toLowerCase())) {
					out.push(item)
				}
			})
			setFilter(out)
		}
	}, [query, array])

	return filter
}
