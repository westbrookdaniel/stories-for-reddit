import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import { AnyObject } from '../types'

const firebaseConfig = {
	apiKey: process.env.FB_APIKEY,
	authDomain: 'FB_AUTH_DOMAIN',
	databaseURL: 'https://stories-for-reddit.firebaseio.com',
	projectId: 'stories-for-reddit',
	storageBucket: 'stories-for-reddit.appspot.com',
	messagingSenderId: '677944946792',
	appId: process.env.FB_APPID,
	measurementId: 'G-RBK6W99GY2',
}
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export const auth = firebase.auth()

export interface UserDataObj {
	stories?: string[]
	subreddits?: string[]
}

const parseDoc = (
	doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
) => ({ ...doc.data(), id: doc.id })

class firebaseApi {
	getAllUsers = async () => {
		try {
			const docs = await db.collection('users').get()
			let output: any[] = []
			docs.forEach((doc) => {
				output.push(parseDoc(doc))
			})
			return output
		} catch (error) {
			console.error(error)
			throw error
		}
	}
	getUser = async (id: string) => {
		try {
			const doc = await db.collection('users').doc(id).get()
			if (doc.exists) {
				return { success: true, data: parseDoc(doc) }
			} else {
				throw 'User does not exist. Please contact our admin'
			}
		} catch (error) {
			console.error(error)
			throw 'Error getting user. Please contact our admin'
		}
	}
	addUser = async (id: string) => {
		try {
			const userData = {
				stories: [],
				subreddits: [],
			}
			await db.collection('users').doc(id).set(userData)
			return { message: 'User added', data: null }
		} catch (error) {
			console.error(error)
			throw { message: 'Failed to create user', data: error }
		}
	}
	signUp = async (email: string, password: string) => {
		return new Promise<string>(async (res, rej) => {
			try {
				const cred = await auth.createUserWithEmailAndPassword(email, password)
				this.addUser(cred.user?.uid!)
				res('Account Created')
			} catch (error) {
				console.error(error)
				rej(error?.message || 'Failed to Create an Account. Please Try Again')
			}
		})
	}
	login = async (email: string, password: string) => {
		return new Promise<string>(async (res, rej) => {
			try {
				await auth.signInWithEmailAndPassword(email, password)
				res('Signed In')
			} catch (error) {
				console.error(error)
				if (error?.code === 'auth/user-not-found') {
					rej('A user does not exist with that email')
				} else {
					rej(error?.message || 'Failed to Login. Please Try Again')
				}
			}
		})
	}
	logout = async () => {
		return new Promise<string>(async (res, rej) => {
			try {
				await auth.signOut()
				res('Logged Out')
			} catch (error) {
				console.error(error)
				rej(error?.message || 'Failed to Log Out. Please Try Again')
			}
		})
	}
	updateUser = async (
		id: string,
		data: UserDataObj
	) => {
		try {
			await db.collection('users').doc(id).update(data)
			return 'Updated successfully'
		} catch (error) {
			throw 'Error updating'
		}
	}
	resetPassword = async (email: string) => {
		return new Promise<string>(async (res, rej) => {
			try {
				await auth.sendPasswordResetEmail(email)
				res('Check your inbox to reset your password')
			} catch (error) {
				console.error(error)
				rej(error?.message || 'Failed Reset Password. Please Try Again')
			}
		})
	}
}

const api = new firebaseApi()

export default api
