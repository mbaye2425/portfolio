Open package.json and then, in script section add the following script.

"scripts": { // ... "deploy": "ng b --prod --base-href https://USERNAME.github.io/DEPOT_NAME/ && npx ngh --dir=dist/Project_Name" },

And now, you can build and deploy to GitHub Pages with a single command: npm run deploy