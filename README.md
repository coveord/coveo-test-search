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
