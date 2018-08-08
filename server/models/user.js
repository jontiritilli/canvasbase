const mysql = require('mysql');
const { crypt } = require('../auth');

exports.createUser = (email, password) => {
  let status = 'active';
  let sql = "INSERT INTO ?? (??, ??, ??, ??) VALUES (?, ?, ?, ?)";
  let inserts = ['user', 'id', 'email', 'password', 'status', null, email, crypt.createHash(password), status];
  return mysql.format(sql, inserts);
}