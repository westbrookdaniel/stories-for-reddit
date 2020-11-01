import snoowrap from 'snoowrap'
import { AnyObject } from '../types'
// https://www.reddit.com/prefs/apps
// https://not-an-aardvark.github.io/snoowrap/

interface storyObject {
	[key: string]: any
}

type subList = subs[]
interface subs {
	title: string
	subs: null | number
}

const subreddits: subList = [
	{ title: 'shortstories', subs: null },
	{ title: 'HFY', subs: null },
	{ title: 'sleepspell', subs: null },
]

export type subredditsType = typeof subreddits

class redditApi {
	r: snoowrap
	loggedIn: boolean
	FeaturedStories: AnyObject
	Subreddit: AnyObject
	StoryById: storyObject
	subredditsWithData: subList

	constructor() {
		const setupObj = {
			userAgent: navigator.userAgent,
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			refreshToken: process.env.REFRESH_TOKEN,
			accessToken: process.env.ACCESS_TOKEN,
		}
		this.r = new snoowrap(setupObj)
		this.loggedIn = false
		this.FeaturedStories = {}
		this.StoryById = {}
		this.Subreddit = {}
		this.subredditsWithData = []
	}

	login = () => {
		const authUrl = snoowrap.getAuthUrl({
			clientId: process.env.CLIENT_ID!,
			scope: ['identity', 'wikiread', 'wikiedit'],
			redirectUri: 'http://localhost:8080/',
			permanent: true,
			state: 'fe211bebc52eb3da9bef8db6e63104d3',
		})
		window.location.href = authUrl
	}

	getFeaturedStories = async (quantity = 12) => {
		try {
			if (this.FeaturedStories[quantity]) {
				return this.FeaturedStories[quantity]
			} else {
				const data = await this.r.getSubreddit('shortstories').getHot({
					limit: quantity,
				})
				const onlyData: any[] = []
				data.forEach((post) => !post.stickied && onlyData.push(post))
				this.FeaturedStories[quantity] = onlyData
				return onlyData
			}
		} catch (error) {
			console.log(error)
			return 'Error can not get featured stories'
		}
	}

	getStoriesFromList = async (idArray: string[]) => {
		if (idArray.length === 0) return []
		const promArr = idArray.map((id) => this.r.getSubmission(id).fetch())
		const storiesArr = await Promise.all(promArr)
		return storiesArr
	}

	getSubredditsFromList = async (idArray: string[]) => {
		if (idArray.length === 0) return []
		if (this.subredditsWithData.length === 0) {
			await this.getSubredditsData()
		}
		return idArray.map((id) =>
			this.subredditsWithData.find((sub) => sub.title === id)
		)
	}

	getSubredditsData = async () => {
		await new Promise((res, rej) => {
			subreddits.forEach((subreddit) => {
				this.r
					.getSubreddit(subreddit.title)
					.fetch()
					.then((data) => {
						subreddit.subs = Math.round(data.subscribers.valueOf() / 100) / 10
						this.subredditsWithData.push(subreddit)
						if (this.subredditsWithData.length === subreddits.length) res()
					})
			})
		})
	}

	getSubreddits = async (quantity?: number) => {
		if (this.subredditsWithData.length === 0) {
			await this.getSubredditsData()
		}
		if (quantity) {
			if (quantity < subreddits.length) {
				const lengthData = [...this.subredditsWithData]
				return lengthData.slice(0, quantity)
			}
		}
		return this.subredditsWithData
	}

	getSubredditStories = async (id: string, quantity = 12) => {
		try {
			if (this.Subreddit[id] && this.Subreddit[id][quantity]) {
				return this.Subreddit[id][quantity]
			} else {
				const data = await this.r.getSubreddit(id).getHot({ limit: quantity })
				const onlyData: any[] = []
				data.forEach((post) => !post.stickied && onlyData.push(post))
				if (!this.Subreddit[id]) {
					this.Subreddit[id] = {}
				}
				this.Subreddit[id][quantity] = onlyData
				return onlyData
			}
		} catch (error) {
			console.log(error)
			return 'Error can not get featured stories'
		}
	}

	hideStoryById = (id: string) => {
		return new Promise<string>((res, rej) => {
			const post = this.r.getSubmission(id)
			post
				.fetch()
				.then((data) => {
					if (data.hidden) {
						post
							.unhide()
							.then(() => {
								res('Story is now visible')
							})
							.catch((error) => {
								console.error(error)
								rej("Couldn't Show Story. Please try again")
							})
					} else {
						post
							.hide()
							.then(() => {
								res('Story is now hidden')
							})
							.catch((error) => {
								console.error(error)
								rej("Couldn't Hide Story. Please try again")
							})
					}
				})
				.catch((error) => {
					console.error(error)
					rej("Couldn't get Story. Please try again")
				})
		})
	}

	getStoryById = (id: string) => {
		try {
			if (this.StoryById[id]) {
				return this.StoryById[id]
			} else {
				const data = new Promise<Omit<snoowrap.Submission, 'then'>>(
					(res, rej) => {
						this.r
							.getSubmission(id)
							.fetch()
							.then((post) => {
								res(post)
							})
					}
				)
				this.StoryById[id] = data
				return data
			}
		} catch (error) {
			console.log(error)
			return null
		}
	}
}

const reddit = new redditApi()
export default reddit
