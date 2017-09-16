const User = require('./user-model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserController {
  static register(req, res) {
    const user = new User(req.body);
    user.hash_password = bcrypt.hashSync(req.body.password, 10);
    user.save(function(err, user) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        delete user.hash_password;
        return res.json(user);
      }
    });
  }

  static signIn(req, res) {
    User.findOne({
      email: req.body.email
    }, function(err, user) {
      console.log('******', user);
      if (err) throw err;
      if (!user) {
        res.status(401).json({ message: 'Authentication failed. User not found.' });
      } else if (user) {
        if (!user.comparePassword(req.body.password)) {
          res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        } else {
          return res.json({token: jwt.sign({ email: user.email, _id: user._id, firstname: user.firstname }, 'RESTFULAPIs')});
        }
      }
    });
  }

  static loginRequired (req, res, next) {
    console.log('**** loginRequired ******');
    console.log(req.user);
    if (req.user) {
      next();
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  }
}

module.exports = UserController;

