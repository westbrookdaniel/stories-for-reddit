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
- [x] E - Profile

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
- [x] M - Search
- [x] H - Subreddits
- [x] M - Filter (sort was more practical)
- [x] E - Dynamic Home content
- [x] M - Pagination (myListing.fetchmore)
- [x] M - List item options
- [x] E - Put Everything Everywhere

Profile

- [x] H - Basic Profile Functionality
- [x] M - Favourite Subs
- [x] M - Saved Stories
- [x] M - Hiding Stories

Finishing Up

- [x] M - Swap reddit profile
- [x] E - Responsive Fixups
- [x] M - Mobile nav (Top Drawer)
- [x] E - Finalising Content
- [ ] E - General polish and optimisations
- [ ] E - Fix title

- [x] E - 404 page
- [x] E - Error Boundary on Suspense
- [ ] M - Handle dynamic page errors with 404 page
