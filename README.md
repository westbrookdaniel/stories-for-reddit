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

---

## Development Outline

- [x] Installed and Working Dependencies
- [x] Styling setup

Visual Page Setup

- [x] M - Home
- [x] E - List
- [ ] E - Subreddits List
- [ ] M - About
- [ ] M - Reader
- [ ] E - Profile
- [ ] E - Attributions

Basic Complexities

- [x] E - Page transitions
- [x] E - Animated header
- [x] E - Dark mode switcher

Vertical Slice

- [ ] M - Dynamic list content
- [ ] H - Working Reader

Expanded Functionality

- [ ] H - Search
- [ ] H - Filter by tags
- [ ] E - Subreddits list content
- [ ] E - Dynamic Home content
- [ ] E - Time to read calculation

Profile

- [ ] M - Profile Functionality
- [ ] M - Saving Stories

Finishing Up

- [ ] H - Minimum coverage at 50%
- [ ] E - Responsive Fixups
- [ ] M - Mobile menu
