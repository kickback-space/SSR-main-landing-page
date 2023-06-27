# landing-page-nextjs
Server side rendered main landing page

# Kickback Landing Page

## install package client code

```
   yarn install
```

## run code client

```
    yarn dev
```


## build code client to static folder

```
    yarn build 
```

## create new ICP-targeted landing pages

1. Create a copy variable in `utils/copyright_variables.js`
2. Duplicate `index.js` within the `pages` directory and rename to match the route you want (e.g. for `metaverse` ICP, you would create `pages/metaverse` file)
3. In your new page, update:
    - import: `import { defaultCopy } from '../utils/copyright_variables';`
    - function name: `Home()` to `{YourRouteHere}Page()`
    - component props: `copy={defaultCopy}`
