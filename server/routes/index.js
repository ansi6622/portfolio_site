var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);
/* GET home/data page. */
router.get('/data', function(req, res, next) {
  knex('projects')
    .then(function(projects) {
      res.json({
        title: 'Anthony T. Simpson - Full Stack Engineer',
        projects: projects
      });
    })
});

module.exports = router;
