import axios, { AxiosInstance, AxiosResponse } from 'axios'
import qs from 'qs'
  
abstract class http {
	protected readonly instance: AxiosInstance

	constructor(baseURL: string) {
		this.instance = axios.create({
			baseURL,
		})

		this.setupInterceptors()
	}

	private setupInterceptors = () => {
		this.instance.interceptors.response.use(
			this.handleResponse,
			this.handleError
		)
	}

	private handleResponse = (res: AxiosResponse) => res

	protected handleError = (error: any) => Promise.reject(error)
}

export default http
