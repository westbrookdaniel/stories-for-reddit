import React, { createContext, useState, FunctionComponent } from 'react'

interface Props {}

export const PageContext = createContext({})

export const PageProvider: FunctionComponent<Props> = ({ children }) => {
	const [pageState, setPageState] = useState<'default' | 'hidden' | 'title'>(
		'default'
	)
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
