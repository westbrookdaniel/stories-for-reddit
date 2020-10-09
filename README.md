# stories-for-reddit

Medium to long form story reader for reddit

## Building and running on localhost

First install dependencies:

```sh
yarn
```

To run in hot module reloading mode:

```sh
yarn start
```

To create a production build:

```sh
yarn build-prod
```

To create a development build:

```sh
yarn build-dev
```

## Running

Open the file `dist/index.html` in your browser

## Testing

To run unit tests:

```sh
yarn test
```

To check code coverage:

```sh
yarn coverage
```

---

## Development Outline

- [x] Installed and Working Dependencies
- [x] Styling setup

Visual Page Setup

- [x] M - Home
- [x] E - List
- [x] E - Subreddits List
- [x] M - About
- [x] M - Reader
- [ ] E - Profile

Basic Complexities

- [x] E - Page transitions
- [x] E - Dark mode switcher

Vertical Slice

- [x] M - Dynamic list content
- [x] H - Working Reader

### Submission Milestone

Expanded Functionality

- [x] E - Time to read calculation
- [x] E - Animated header
- [ ] H - Search and filter
- [ ] E - Subreddits list content
- [ ] E - Dynamic Home content
- [ ] M - Pagination (myListing.fetchmore)
- [ ] M - List item options

Profile

- [ ] M - Profile Functionality
- [ ] M - Saving Stories

Finishing Up

- [ ] H - Minimum coverage at 70%
- [ ] E - Responsive Fixups
- [ ] M - Mobile menu
- [ ] E - Finalising Content and Links
- [ ] E - General polish

## Extra Notes

If testing is still difficult try [user-event](https://github.com/testing-library/user-event)