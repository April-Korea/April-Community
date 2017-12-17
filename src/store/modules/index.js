const req = require.context('.', false, /^((?!index).)*\.js$/)

req.keys().forEach((key) => {
  const moduleName = key.replace(/^\.\/([^.]+)\.js$/, '$1')
  module.exports[moduleName] = req(key).default
})