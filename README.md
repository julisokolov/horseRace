## Here is what you need to have to launch the app
# You can download npm and node.js using this link:
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

# Install axios
npm install axios

# Install jsonserver
npm install json-server --save-dev

# Add small addition in script part of package.json file
"server": "json-server -p3001 --watch db.json"

# To launch application write these 2 commands in separate cmd-s
npm run dev