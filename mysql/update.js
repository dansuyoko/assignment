const db = require('../config/database')
 
let updateQuery = `UPDATE store SET petId = ? WHERE id = ?`
let data = [5, 2]
db.query(updateQuery, data, function (err, updated) {
  if (err) throw err;
  console.log(updated);
});
