var express = require('express');
var router = express.Router();
var jobs = require('../jobhistory');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(jobs);
  res.render('index',
      {
        title: 'Brendan O\'Leary | Product Manager, Certified Scaled Agilist',
        jobhistory: jobs
      }
  );
});

module.exports = router;
