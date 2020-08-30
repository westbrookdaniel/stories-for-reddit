import React from 'react'
import Header from './Header'
import { Router } from 'react-router-dom'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { createMemoryHistory } from 'history'

afterEach(cleanup)

describe('Header', () => {
	const history = createMemoryHistory()
	const route = '/'
	history.push(route)

	it('should render', () => {
		const header = render(
			<Router history={history}>
				<Header />
			</Router>
		)

		expect(header).toMatchSnapshot()
	})

	it('should not break when using links', () => {
		const header = render(
			<Router history={history}>
				<Header />
			</Router>
		)

		fireEvent.click(header.getByText(/home/i))
		fireEvent.click(header.getByText(/about/i))

		expect(header).toMatchSnapshot()
	})
})
