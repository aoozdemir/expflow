'use strict';

module.exports.handler = async event => {
  console.log(`Queue received a message; ${JSON.stringify(event)}`)
};
