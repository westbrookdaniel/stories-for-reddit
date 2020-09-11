export default function toLink(title: string) {
	const string = title + ' '
	let parse = string.toLowerCase().replace(/[^\w ]+/g, '')
	let filter = parse.match(/^(\w+\s+){5}/g)
	if (!filter) {
		filter = parse.match(/^(\w+\s+){4}/g)
	}
	if (!filter) {
		filter = parse.match(/^(\w+\s+){3}/g)
	}
	if (!filter) {
		filter = parse.match(/^(\w+\s+){2}/g)
	}
	if (!filter) {
		filter = parse.match(/^(\w+\s+){1}/g)
	}
	const slug = filter?.join().trim().replace(/ +/g, '-')
	return slug
}
