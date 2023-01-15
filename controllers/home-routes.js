const router = require('express').Router();


// GET route for getting all of the blogs that on the website
router.get('/', async (req, res) => {
  
  res.render('all');
});

module.exports = router;

