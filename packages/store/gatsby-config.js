const path = require('path')
require('dotenv').config({
  path: path.join(__dirname, './.env')
})

require("ts-node").register({
  files: true, // so that TS node hooks have access to local typings too
})


module.exports = require('./src/gatsby/config').default
