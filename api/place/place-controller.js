const Place = require('./place-model');

class placeController {

  static index = (req, res) => {
    place.find({}, (err, todos) => {
      res.send(todos);
    });
  };

  static post = (req, res) => {
    var place = new Place(req.body);
    place.save((err, result) => {
      if (err) console.log(err);
      res.sendStatus(204);
    });
  };
}

module.exports = placeController;