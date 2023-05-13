const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'minegocio',
  password: 'carolina11'
});
connection.connect();
module.exports = connection;