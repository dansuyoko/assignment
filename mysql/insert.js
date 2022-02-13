const db = require('../config/database');

let data = [
  { petId: 4, quantity: "10", status: "not placed" },
  { petId: 2, quantity: "4" },
  { petId: 3, quantity: "7" }
];

data.forEach((value) => {
  let insertQuery = `INSERT INTO store SET ?;`;
  db.query(insertQuery, value ,function (error, results, fields) {
    if (error) throw error;
    console.log('Data has been inserted');
  });
});
