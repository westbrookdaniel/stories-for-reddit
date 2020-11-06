import { User } from 'firebase'
import React, { FunctionComponent, useEffect, useState } from 'react'
import firebase, { auth, UserDataObj } from './api/firebase'
import { AnyObject } from './types'

interface Props {}

export const AuthContext = React.createContext<any>(null)

const AuthProvider: FunctionComponent<Props> = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<User | null>()
	const [userData, setUserData] = useState<AnyObject | null>(null)
	const [needsRefresh, setNeedsRefresh] = useState<boolean>(true)

	useEffect(() => {
		const unsub = auth.onAuthStateChanged((user) => {
			setCurrentUser(user)
		})
		return unsub
	}, [])

	useEffect(() => {
		if (currentUser && needsRefresh) {
			firebase
				.getUser(currentUser.uid)
				.then((data) => {
					setUserData(data)
					setNeedsRefresh(false)
				})
				.catch((error) => {
					console.error(error)
				})
		}
	}, [currentUser, needsRefresh])

	const updateAccount = (email: string, password: string) => {
		return new Promise<string>(async (res, rej) => {
			try {
				const prom = []
				console.log(email, password)

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

	const updateUserData = async (data: UserDataObj) => {
		try {
			const res = await firebase.updateUser(currentUser?.uid!, data)
			setNeedsRefresh(true)
			return res
		} catch (error) {
			throw error
		}
	}

	// Note that currentUser === undefined is still loading and currentUser === null is no logged in user
	return (
		<AuthContext.Provider
			value={{
				currentUser,
				updateAccount,
				updateUserData,
				userData,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthProvider
