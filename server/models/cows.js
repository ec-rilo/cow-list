const db = require('../db');

module.exports = {
  getAll: (callback) => {
    const query = 'SELECT * FROM cows';
    db.query(query, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(err, data);
      }
    });
  },

  postOne: (data, callback) => {
    const query = `INSERT INTO cows VALUES (null, ?, ?);`;

    db.query(query, [data.name, data.description], (err, response) => {
      if (err) {
        callback(err);
      } else {
        callback(null, response);
      }
    });
  }
};