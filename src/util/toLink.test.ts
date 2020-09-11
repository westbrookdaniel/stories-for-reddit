import toLink from './toLink'

describe('toLink', () => {
	test('should return slug', () => {
		const slug = toLink('[OT] Getting Started on Serial Saturday - A Guide')
		expect(slug).toEqual('ot-getting-started-on-serial')
	})
	test('should return slug with small titles', () => {
		const slug = toLink('Hello World')
		expect(slug).toEqual('hello-world')
		const slug2 = toLink('string')
		expect(slug2).toEqual('string')
        })
        test('should handle invalid string', () => {
                const slug = toLink('[][][]]')
		expect(slug).toEqual(undefined)
        })
        
})
