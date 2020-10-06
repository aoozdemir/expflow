let argv = require('optimist')
  .usage([
    'USAGE: $0 [-p <port>]'
  ])
  .option('port', {
    alias: 'p',
    'default': 3000,
    description: 'Server Port'
  })
  .argv;

module.exports = argv
