var express = require('express');
var router = express.Router();
const axios = require('axios');

let argv = require('../utils/argv');

/* GET users listing. */
router.post('/send', function (req, res, next) {
  axios.post(`http://localhost:3001/`, {
    message: req.body.message,
  })
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });

  res.writeHead(302, {
    'Location': `http://localhost:${+argv.port}/`
  });
  res.end();
});

router.get('*', function (req, res, next) {
  res.writeHead(302, {
    'Location': `http://localhost:${+argv.port}/`
  });
  res.end();
})

module.exports = router;
