# stories-for-reddit

Medium to long form story reader for reddit.

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
- [ ] M - Reader
- [ ] E - Profile
- [ ] E - Attributions

Basic Complexities

- [x] E - Page transitions
- [x] E - Animated header
- [x] E - Dark mode switcher

Vertical Slice

- [ ] M - Dynamic list content
- [x] E - Time to read calculation
- [ ] H - Working Reader

### Submission A2 Milestone

Expanded Functionality

- [ ] H - Search
- [ ] H - Filter by tags
- [ ] E - Subreddits list content
- [ ] E - Dynamic Home content
- [ ] M - Pagination

Profile

- [ ] M - Profile Functionality
- [ ] M - Saving Stories

Finishing Up

- [ ] H - Minimum coverage at 70%
- [ ] E - Responsive Fixups
- [ ] M - Mobile menu
- [ ] E - Finalising Content and Links
