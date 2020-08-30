import http from './http'
import qs from 'qs'
import { Collection, User } from '../types'

import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyBVj1aSVACwaNRQP2VuI698G4kJb6yW-Yo',
	authDomain: 'stories-for-reddit.firebaseapp.com',
	databaseURL: 'https://stories-for-reddit.firebaseio.com',
	projectId: 'stories-for-reddit',
	storageBucket: 'stories-for-reddit.appspot.com',
	messagingSenderId: '677944946792',
	appId: '1:677944946792:web:1c7652578f3b2e465e8bdd',
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
