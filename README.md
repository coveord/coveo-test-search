## Installation

To install or update, you just need to run:  
`npm i`

The gulp file will run automatically as a post-installation script, copying assets 
from the package, and custom test pages from `./testpages/` to `./public/custom`


## Start server

Run local server with:  
`npm start`

The server will be accessible at http://localhost:5001/


## Publishing to Heroku

To push changes to Heroku, commit any change and push to git. 

If there is no change to push, you can use this command to trigger redeployment 
with an empty commit:  
`npm run update_heroku`


## Changing test files

If you make changes to files in `./public/custom` or add new ones, these will be 
local changes. They will be visible immediately on the server, but will not be 
committed to Heroku. They will may be overwritten if you run `npm i`.

If you make changes to files in `./testpages`, these chages will be tracked 
by git. In order to see the changes locally, you can run `npm run copy_test_pages` 
(or do `npm i`) to copy them to `./public/custom`.
