import { User } from 'firebase'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { auth } from './api/firebase'

interface Props {}

export const AuthContext = React.createContext<any>(null)

const AuthProvider: FunctionComponent<Props> = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<User | null>()

	useEffect(() => {
		const unsub = auth.onAuthStateChanged((user) => {
			setCurrentUser(user)
		})
		return unsub
	}, [])

	const update = async (email: string, password: string) => {
		return new Promise<string>(async (res, rej) => {
			try {
				const prom = []
				console.log(email, password);
				
				if (password?.length !== 0) {
					prom.push(currentUser?.updatePassword(password))
				}
				if (email?.trim().length === 0) {
					rej('Email field is required')
				} else if (email !== currentUser?.email) {
					prom.push(currentUser?.updateEmail(email))
				}
				if (prom.length === 0) {
					rej('No changes were made')
				}
                await Promise.all(prom)
				res('Your account details have been updated')
			} catch (error) {
				console.error(error)
				rej(error?.message || 'Failed Reset Password. Please Try Again')
			}
		})
	}

	return (
		<AuthContext.Provider value={{ currentUser, update }}>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthProvider
