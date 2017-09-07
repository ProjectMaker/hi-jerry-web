const express = require('express');
const router = express.Router();

// Register middleware here

// Register routes here
router.get('/user', (req, res) => {
  res.json({firstname: 'tom', lastname: 'rudeboy'});
});

module.exports = router;
