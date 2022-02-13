const db = require('../config/database')

let deleteQuery = `DELETE FROM store WHERE id = ?`
let data = [3]
db.query(deleteQuery, data, function (err, deleted) {
  if (err) throw err;
  console.log(deleted);
});
