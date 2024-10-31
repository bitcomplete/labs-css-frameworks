NOTE: All the scripts loaded in this CSS framework has `type="module"` attribute, which will cause CORS error if you just open the html file. You will have to use a server for this site specifically for those scripts to load.
1. Install `serve` with `npm install -g serve` (you only need to do this once)
2. cd to this directory
3. Run `serve` within this directory to start a server
4. Access the site at the url prompted

Other notes on the assets in `/vendor` folder: it's a nightmare downloading all the required static assets for this framework. Besides the fact that separate js files used for different components (~40 js files, see https://carbondesignsystem.com/developing/frameworks/web-components/#using-cdn and https://1.www.s81c.com/common/carbon/web-components/tag/v2/latest/input.min.js), each js file references one or more other js files that's not in the previous list (the ones with a hash in their names). I wish I never need to update them. 
BTW, one of the js file (https://1.www.s81c.com/common/carbon/web-components/tag/v2/latest/input.min.js) doesn't exist (404), so it wasn't downloaded to `/vendor` folder.