const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const Posts = require('../models/Posts');
const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/post', forwardAuthenticated, (req, res) => res.render('post'));

router.post("/post", async (req, res) => {
    try {
        let { Title, Description } = req.body;

        if (!Title || !Description)
            return res.status(400).json({ msg: "Not all fields have been entered." });

        const newTitle = new Title({
            Title,
            Description: Description
        });
        const savedTitle = await newTitle.save();
        res.json(savedLink);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;
