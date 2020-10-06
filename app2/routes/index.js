const express = require('express');
const router = express.Router();

const AWS = require('aws-sdk');

const credentials = new AWS.SharedIniFileCredentials({ profile: 'personal' });
AWS.config.update({ region: 'eu-west-1' });
AWS.config.credentials = credentials;

const sqsQueue = new AWS.SQS();
const sqsUrl = 'https://sqs.eu-west-1.amazonaws.com/704960640266/lambdaQueue';

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    status: 'ok'
  });
});

router.post('/', function (req, res, next) {
  const params = {
    MessageBody: req.body.message,
    QueueUrl: sqsUrl,
  };

  sqsQueue.sendMessage(params, (err, _) => {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('Successfully sent the message to SQS.');

      return;
    }
  });

  res.json({
    message: 'received'
  })
  res.end();
})

module.exports = router;
