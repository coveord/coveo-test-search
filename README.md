## Installation

To install or update, you just need to run:  
`npm i`

The gulp file will run automatically as a post-installation script, copying assets 
from the package, and custom test pages from `./testpages/` to `./public/custom`


## Start server

Run local server with:  
`npm start`

The server will be accessible at http://localhost:5001/


## Changing test files

If you make changes to files in `./public/custom` or add new ones, these will be 
local changes. They will be visible immediately on your local server, but will not be 
tracked by git. They may be overwritten next time you run the server.

If you make changes to files in `./testpages`, these changes will be tracked 
by git. In order to see the changes locally, you can re-run `npm start`.

## Building a search-ui version other than 'beta'

The gulpfile looks for the environment variable SEARCH_UI_VERSION. If it doesn't find one,
it defaults to building the version with the 'beta' tag. This overrides any value you put 
in `coveo-search-ui` value you set in the `package.json` dependencies.

See here for versions:
https://www.npmjs.com/package/coveo-search-ui?activeTab=versions

SEARCH_UI_VERSION accepts a specific version such as '2.10107.0', or a tag such as 'latest'

### Setting the value in the Netlify build

Browse to this page on the Netlify console (requires log-in):
https://app.netlify.com/sites/coveo-test-search/settings/env

Set a specific version here as a string, such as '2.10107.0', or a tag, such as 'latest'

### Forcing a specific version locally on Mac/Linux

```sh
NPM_VERSION_TO_BUILD=2.10106.1 npm i
```

### Forcing a specific version locally on Windows

```bat
cmd /C "set NPM_VERSION_TO_BUILD=2.10106.1 && npm i"
```
