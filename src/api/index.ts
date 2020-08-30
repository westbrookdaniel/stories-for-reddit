import http from './http'
import { Posts } from '../types'
import qs from 'qs'

class placeholderApi extends http {
	constructor() {
		super('https://jsonplaceholder.typicode.com')
	}

	getPosts = async () => {
		const res = await this.instance.get<Posts[]>('/posts')
		return res.data
	}			
}

const api = new placeholderApi()

export default api
