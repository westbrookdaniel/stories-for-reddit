import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import { Collection, User } from '../types'

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

class firebaseApi {
	get = async (collection: Collection) => {
		try {
			const data = await db.collection(collection).get()
			let docs: any[] = []
			data.forEach((doc) => {
				docs.push(doc.data())
			})
			return docs
		} catch (error) {
			console.error(error)
			throw error
		}
	}
	post = async (collection: Collection, user: User) => {
		try {
			const data = await db.collection(collection).add(user)
			return data.id
		} catch (error) {
			console.error(error)
			throw error
		}
	}
	signUp = async (email: string, password: string) => {
		return new Promise<string>(async (res, rej) => {
			try {
				await auth.createUserWithEmailAndPassword(email, password)
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
