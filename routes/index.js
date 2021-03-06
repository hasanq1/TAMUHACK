const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user, 
    role: req.role
  })
);
// Blog
router.get('/blog', ensureAuthenticated, (req, res) =>
  res.render('blog', {
    user: req.user, 
    role: req.role
  })
);

module.exports = router;
