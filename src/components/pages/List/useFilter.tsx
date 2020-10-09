import { useEffect, useState } from 'react'

export const useFilter = (array: any[] | null, query: string) => {
	const [filter, setFilter] = useState<any[]>([])
	
	useEffect(() => {
		if (array) {
			const out: any[] = []
			array.forEach((post) => {
				if (post.title?.toLowerCase().includes(query.toLowerCase())) {
					out.push(post)
				}
			})
			setFilter(out)
		}
	}, [query, array])

	return filter
}
