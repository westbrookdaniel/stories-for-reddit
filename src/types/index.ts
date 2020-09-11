export interface Posts {
	userId: number
	id: number
	title: string
	body: string
}

export type User = {
	age: number
	name: string
}

export type Collection = 'users'

export type CardPost = {
	title: string
	length: number | undefined
	id: string
}

export type AnyObject = {
	[index: string]: any
}