import snoowrap from 'snoowrap'
// https://www.reddit.com/prefs/apps
// https://not-an-aardvark.github.io/snoowrap/

class redditApi {
	r: snoowrap
	loggedIn: boolean

	constructor() {
		const setupObj = {
			userAgent: navigator.userAgent,
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			refreshToken: process.env.REFRESH_TOKEN,
			accessToken: process.env.ACCESS_TOKEN,
		}
		console.log(setupObj)
		console.log(process.env)
		this.r = new snoowrap(setupObj)
		this.loggedIn = false
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

	getFeaturedStories = async () => {
		try {
			const posts = await this.r.getHot('shortstories', { limit: 10 }) // Actually is a limit of 12
			return posts
		} catch (error) {
			console.log(error)
			return null
		}
	}

	getStoryById = (id: string) => {
		try {
			const data = new Promise<Omit<snoowrap.Submission, "then">>((res, rej) => {
				this.r
					.getSubmission(id)
					.fetch()
					.then((post) => {
						res(post)
					})
			})
			return data
		} catch (error) {
			console.log(error)
			return null
		}
	}
}

const reddit = new redditApi()
export default reddit
