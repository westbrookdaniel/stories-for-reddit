# Stories For Reddit

Discover and read community made short stories

A web app for reading short stories from Reddit’s many writing focused communities
built with React and Typescript on a custom Webpack configuration. The website was
developed to make Reddit short story content easily findable and consumable by the
public, as well as provide a more accessible and enjoyable experience. It helps
people with busy lives reconnect with bit-sized stories through a specialized
sreading experience.

---

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

Open the file `dist/index.html` in your browser

---

## About

React app built with Typescript and custom Webpack configuration using Chakra UI as a React
Framework and Framer motion as an animation library. Backend is handled by Firebase.

### Directory Annotations

| Directory/File            | Description                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| theme.js                  | Theme decloration for chakra that sets default styles                                                                                       |
| public                    | Files that are coppied into the build directory                                                                                             |
| src                       | General directory for code that contains pages, entry point related content (index.tsx index.html index.css), and context (AuthContext.tsx) |
| src/account               | Account related routes and functionality for those pages                                                                                    |
| src/api                   | Shortcuts for interacting with apis that handle getting data from firebase, catching some errors, and caching                               |
| src/components            | Directory for components                                                                                                                    |
| src/components/layout     | Layout related components                                                                                                                   |
| src/components/pages/\*\* | Components that are specific to a certain page                                                                                              |
| src/components/util       | Reusable utility files and general use components                                                                                           |
| src/fonts                 | Local fonts that are included with @font-face in src/index.css                                                                              |
| src/helpers               | Helpers (makeCancelable.ts is used to make promises cancelable to stop memory leaks)                                                        |
| src/images                | Images that are used on the site                                                                                                            |
| src/types                 | Some general reusable typescript types that aren't related to a specific file                                                               |

---

### Conceptual Annotations

| Concept                       | Description                                                                                                                       |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ChakraProvider                | Provides everything Chakra UI related, resets the css, and applies my custom theme                                                |
| AuthContext                   | Uses React.useContext to provide the current user and its data and CRUD functionality related to the user to all files in the app |
| react-router-dom              | History based routing which also handles 404s and dynamic routes                                                                  |
| React.lazy and React.Suspense | Being used to lazy load routes and Suspense shows a spinner while it is loading                                                   |
| AnimatePresence               | A part of framer motion that enables fade out animations                                                                          |
| Social Links                  | Social links can be found in the footer                                                                                           |

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
- [x] E - General polish and optimisations
- [x] E - Fix title font
- [x] E - Fix broken more items popover
- [x] E - 404 page
- [x] E - Error Boundary on Suspense
- [x] M - Handle dynamic page errors with 404 page
- [ ] E - Add share buttons
