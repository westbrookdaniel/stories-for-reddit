import { Spinner } from '@chakra-ui/core'
import React, { FunctionComponent, Suspense } from 'react'

export const Susp: FunctionComponent = ({ children }) => {
	return (
		<Suspense
			fallback={
				<div className="suspense-spinner">
					<Spinner color="primary.500" />
				</div>
			}
		>
			{children}
		</Suspense>
	)
}
