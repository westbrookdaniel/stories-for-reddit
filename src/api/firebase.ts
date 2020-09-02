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
}

const api = new firebaseApi()

export default api
