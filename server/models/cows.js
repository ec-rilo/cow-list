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
  }
};