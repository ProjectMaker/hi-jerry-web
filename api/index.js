const UserController = require('./user/user-controller');

module.exports = {
  user: {
    routes: require('./user/user-routes'),
    authentification: UserController.authentification,
    loginRequired: UserController.loginRequired
  },
  place: {
    routes: require('./place/place-routes')
  }
};