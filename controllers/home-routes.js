const router = require('express').Router();


// GET route for getting all of the blogs that on the website
router.get('/', async (req, res) => {
  
  res.render('home');
});

router.get('/login', async (req, res) => {
  
  res.render('login');
});

module.exports = router;

