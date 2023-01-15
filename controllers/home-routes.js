const router = require('express').Router();


// GET route for getting all of the blogs that on the website
router.get('/', async (req, res) => {
  
  res.render('home');
});

router.get('/login', async (req, res) => {
  
  res.render('login');
});

router.get('/dashboard', async (req, res) => {
  
  res.render('dashboard');
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;

