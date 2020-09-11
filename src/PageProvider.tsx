import React, { createContext, useState, FunctionComponent } from 'react'

export interface PageStateProps {
	page:
		| [PageStateType, SetPageStateType]
		| any[]
	title: any[]
}

export type PageStateType = 'default' | 'hidden' | 'title'
export type SetPageStateType = React.Dispatch<React.SetStateAction<PageStateType>>

export const PageContext = createContext<PageStateProps>({ page: [], title: [] })

export const PageProvider: FunctionComponent = ({ children }) => {
	const [pageState, setPageState] = useState<PageStateType>('default')
	const [pageTitle, setPageTitle] = useState<string | undefined>()

	return (
		<PageContext.Provider
			value={{
				page: [pageState, setPageState],
				title: [pageTitle, setPageTitle],
			}}
		>
			{children}
		</PageContext.Provider>
	)
}
