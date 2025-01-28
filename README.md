This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#Implementation

###State Management:
The  React's built-in state management (useState, useContext) used only. There is no such complexity to use a separate state management library like Redux.



###Data Fetching:

App using a combination of server-side rendering (SSR) and static site generation (SSG), main page being pre-rendered at build time, while others need fresh data on each request.

###Middleware:

To protect certain routes, a custom middleware is implemented. This middleware checks if the user is authenticated before allowing access to the route.
Not sure if it is best practice to use middleware in Next.js, but it is a good way to protect routes.

##Possible Improvements:

- Add a loading spinner when fetching data.
- Add a 404 page for invalid routes and pages for other errors.
- Make authentication form in popup/modal insted of redirecting to another page.
- Make a module for api error handling.
- Add a module for form validation.
- Add a unit tests for components and pages.
- Make api routes to proxy requests to the actual RAWG api server to avoid CORS issues and make possible to use data-fetching from client-side components more secure.