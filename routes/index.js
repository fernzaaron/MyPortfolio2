var express = require('express');
var router = express.Router();

// simple routes for my infr3120 portfolio

/* GET home page. */
router.get('/', function(req, res, next) {
  // render the home page
  res.render('home', { title: 'Home' });
});

/* Optional: GET /home as alias */
router.get('/home', function(req, res, next) {
  // another route for home just /home
  res.render('home', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  // about page (info about me)
  res.render('about', { title: 'About' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  // projects list (short summaries)
  res.render('projects', { title: 'Projects' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  // contact page (form front-end)
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
