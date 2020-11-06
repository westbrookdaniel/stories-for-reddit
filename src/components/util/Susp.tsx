import { Spinner } from '@chakra-ui/core'
import React, { FunctionComponent, Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'

export const Susp: FunctionComponent = ({ children }) => {
	return (
		<ErrorBoundary>
			<Suspense
				fallback={
					<div className="suspense-spinner">
						<Spinner color="primary.500" />
					</div>
				}
			>
				{children}
			</Suspense>
		</ErrorBoundary>
	)
}
