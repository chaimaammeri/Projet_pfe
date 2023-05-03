import mysql from 'mysql';
import bcrypt from 'bcryptjs';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Chaimamysql123@',
  database: 'dxctech'
});


const saltRounds = 10;

bcrypt.hash('chaima12345', saltRounds, function(err, hash) {
  const administrator = { Id_Admin:'01',Email_Admin: 'chaimaammeri@dxc.com', Password_Admin: hash };
  db.query('INSERT IGNORE INTO administrator SET ?', administrator, function(error, results, fields) {
    if (error) throw error;
    if (results.affectedRows === 0) {
      console.log('Administrator with ID 01 already exists in database');
    } else {
      console.log('Administrator with ID 01 added to database');
    }
  });
});

bcrypt.hash('mehdi12345', saltRounds, function(err, hash) {
  const administrator = { Id_Admin:'02',Email_Admin: 'mehdikhamlia@dxc.com', Password_Admin: hash };
  db.query('INSERT IGNORE INTO administrator SET ?', administrator, function(error, results, fields) {
    if (error) throw error;
    if (results.affectedRows === 0) {
      console.log('Administrator with ID 02 already exists in database');
    } else {
      console.log('Administrator with ID 02 added to database');
    }
  });
});

bcrypt.hash('abir12345', saltRounds, function(err, hash) {
  const administrator = { Id_Admin:'03',Email_Admin: 'abir.gharrad@dxc.com', Password_Admin: hash };
  db.query('INSERT IGNORE INTO administrator SET ?', administrator, function(error, results, fields) {
    if (error) throw error;
    if (results.affectedRows === 0) {
      console.log('Administrator with ID 03 already exists in database');
    } else {
      console.log('Administrator with ID 03 added to database');
    }
  });
});

bcrypt.hash('abdallah12345', saltRounds, function(err, hash) {
  const administrator = { Id_Admin:'04',Email_Admin: 'abdallah.ghedamsi@dxc.com', Password_Admin: hash };
  db.query('INSERT IGNORE INTO administrator SET ?', administrator, function(error, results, fields) {
    if (error) throw error;
    if (results.affectedRows === 0) {
      console.log('Administrator with ID 04 already exists in database');
    } else {
      console.log('Administrator with ID 04 added to database');
    }
  });
});

bcrypt.hash('adel12345', saltRounds, function(err, hash) {
  const administrator = { Id_Admin:'05',Email_Admin: 'adel.nbili@dxc.com', Password_Admin: hash };
  db.query('INSERT IGNORE INTO administrator SET ?', administrator, function(error, results, fields) {
    if (error) throw error;
    if (results.affectedRows === 0) {
      console.log('Administrator with ID 05 already exists in database');
    } else {
      console.log('Administrator with ID 05 added to database');
    }
  });
});

export default db;