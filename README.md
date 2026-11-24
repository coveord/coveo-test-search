# Hosts

The test pages are served from two hosts in parallel:

- **GitHub Pages (new host):** `https://coveord.github.io/coveo-test-search/custom/<page>.html`,
  where `<page>` is the name of a file in `./testPages/` without the `.html` extension.
- **Netlify (current host):** used by the e2e certifier in `coveo/search-ui` until the certifier migrates
  to GitHub Pages.

Future work: Netlify is scheduled for removal after the certifier migration.

# Deploying to GitHub Pages

The `deploy-pages.yml` GitHub Actions workflow builds the site and deploys it to GitHub Pages.

- A merge to `master` deploys the default version of search-ui: the `beta` dist-tag while a release
  candidate is out, otherwise `latest`. (search-ui publishes each release candidate as `beta` and
  removes the tag after promotion, so most of the time there is no `beta`.)
- To deploy a specific version or tag, run the workflow with the `search_ui_version` input.
  It's used as is, with no fallback: the run fails if it doesn't exist on npm.
```sh
gh workflow run deploy-pages.yml -f search_ui_version=2.10107.0
```
- Running the workflow without `-f` (`gh workflow run deploy-pages.yml`) returns the site to the default version.
- The run summary shows the requested version, the resolved version or tag, and the installed version.
- GitHub Pages caches files for 10 minutes, so you may need a hard refresh after a deployment.

# Deploying to Netlify

If you have no changes to make to the test files, just run the build hook using the value stored in 1passord
as `Netlify build hook for coveo-test-search`:
```
curl --request POST 'https://api.netlify.com/build_hooks/************************'
```
This will build the beta version by default, or whatever version is set as the environment variable
SEARCH_UI_VERSION in Netlify (See `Building a search-ui version other than 'beta'` below).

If you need to change anything in the repo, Netlify will build when you merge your PR.

In Netlify, SEARCH_UI_VERSION is set per deploy context: production builds `beta` (the e2e certifier
expects the release candidate there), while deploy previews and branch deploys build `latest`.

Unlike GitHub Pages, Netlify production has no fallback to `latest`: while no `beta` dist-tag exists,
its build fails. A failed build leaves the previous Netlify deploy live.

## Building a search-ui version other than 'beta'

The gulpfile looks for the environment variable SEARCH_UI_VERSION. If it doesn't find one,
it defaults to building the version with the `beta` tag. This overrides any value you put 
in `coveo-search-ui` value you set in the `package.json` dependencies.

See here for versions:
https://www.npmjs.com/package/coveo-search-ui?activeTab=versions

SEARCH_UI_VERSION accepts a specific version such as '2.10107.0', or a tag such as 'latest'


### Setting the value in the Netlify UI

- Browse to this page on the Netlify console (requires log-in):
https://app.netlify.com/sites/coveo-test-search/settings/env

- Edit the **Production** value only: set a specific version as a string, such as '2.10107.0', or a tag,
  such as 'latest'. Leave the deploy preview and branch deploy values at 'latest'.

- Remember to set the production value back to 'beta' when you're done testing the version.

### Setting the value using the Netlify CLI
- If you don't have the [Netlify CLI](https://docs.netlify.com/cli/get-started/) installed, run:
```sh
npm install netlify-cli -g
```

- From inside this repository, run this command with the version you want. Always pass
`--context production`: without it, the command overwrites the value for every deploy context.
```sh
netlify env:set SEARCH_UI_VERSION 2.10106.1 --context production
```
You will be redirected to the browser to authenticate.

- Run the build hook (see instructions above)

- When you're done, set the production version back to `beta`:
```sh
netlify env:set SEARCH_UI_VERSION beta --context production
```
(It is not possible to set it back to a null value in the CLI without deleting the variable)


# Local build and run

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

## Forcing a specific version for local builds

On Mac/Linux
```sh
SEARCH_UI_VERSION=2.10106.1 npm i
```

On Windows:
```bat
cmd /C "set SEARCH_UI_VERSION=2.10106.1 && npm i"
```

# Known broken pages

None.
