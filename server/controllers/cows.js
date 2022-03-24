const models = require('../models/models.js');

module.exports = {
  get: (req, res) => {
    models.cows.getAll((err, response) => {
      if (err) {
        res.send(err);
      } else {
        res.send(response);
      }
    })
  },

  post: (req, res) => {
    models.cows.postOne(req.body, (err, response) => {
      if (err) {
        res.send(err);
      } else {
        res.send(`Cow data posted!`);
      }
    });
  }
};