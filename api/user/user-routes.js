const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();

const UserController = require('./user-controller');

const userResponse = (req, res) => {
  res.json({firstname: 'tom', lastname: 'rudeboy'});
};

// Register routes here
router.get('/', UserController.loginRequired, userResponse);

router.post('/auth/register', jsonParser, UserController.register);
router.post('/auth/sign-in', jsonParser, UserController.signIn);

module.exports = router;
