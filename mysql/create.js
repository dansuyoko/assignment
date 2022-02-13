const db = require('../config/database');

let createQuery = `
CREATE TABLE IF NOT EXISTS store (
    id INT NOT NULL AUTO_INCREMENT,
    petId INT NOT NULL,
    quantity VARCHAR(10) DEFAULT NULL,
    status VARCHAR(50) DEFAULT 'placed',
    shipDate DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    updatedAt DATETIME NULL,
    PRIMARY KEY (id)
)
COLLATE='utf8mb4_general_ci'
;
`;

db.query(createQuery, function (error, results, fields) {
  if (error) throw error;
  console.log('Table has been created');
});
