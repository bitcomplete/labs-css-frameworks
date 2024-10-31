### Quick start
- `npm install`
- `npm run dev`

### Notes:
Had to use Vite to host the site for this CSS framework locally if we don't want to use CDN hotlinks because we have to install and build @material/web from NPM and load the modules.
Attempting to download all files from https://esm.run/@material/web/ and import locally didn't work as dependencies of @material/web cannot be found. For reference, see https://github.com/material-components/material-web/blob/main/docs/quick-start.md#cdn for their doc on using CDN.