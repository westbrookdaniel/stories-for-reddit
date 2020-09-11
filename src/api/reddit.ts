import snoowrap from 'snoowrap'
// https://www.reddit.com/prefs/apps
// https://not-an-aardvark.github.io/snoowrap/

class redditApi {
	r: snoowrap

	constructor() {
		this.r = new snoowrap({
			userAgent: navigator.userAgent,
			clientId: process.env.CLIENT_ID!,
			clientSecret: process.env.CLIENT_SECRET!,
			refreshToken: process.env.REFRESH_TOKEN!,
			accessToken: process.env.ACCESS_TOKEN!,
		})
	}

    login() {
		const authUrl = snoowrap.getAuthUrl({
			clientId: process.env.CLIENT_ID!,
			scope: ['identity', 'wikiread', 'wikiedit'],
			redirectUri: 'http://localhost:8080/',
			permanent: true,
			state: 'fe211bebc52eb3da9bef8db6e63104d3', // a random string, this could be validated when the user is redirected back
        })
        window.location.href = authUrl
    }
    
	getFeaturedStories() {
		this.r.getSubreddit('shortstories')
	}
}

const reddit = new redditApi()
export default reddit
