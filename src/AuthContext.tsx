import { User } from 'firebase'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { auth } from './api/firebase'

interface Props {}

export const AuthContext = React.createContext<any>(null)

const AuthProvider: FunctionComponent<Props> = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<User | null>()

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })  
        return unsub
    }, [])

	return (
		<AuthContext.Provider value={{ currentUser }}>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthProvider
