import mysql from 'mysql';
import bcrypt from 'bcryptjs'
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Chaimamysql123@',
  database: 'dxctech'
});
 
db.connect(function(err) {
  if(err) {
    console.log("Error in connection")
  }else{
    console.log("connected")
  }
})

const saltRounds = 10;

bcrypt.hash('chaima12345', saltRounds, function(err, hash) {
  const administrator = { id:'01',email: 'chaimaammeri@dxc.com', password: hash };
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
  const administrator = { id:'02',email: 'mehdikhamlia@dxc.com', password: hash };
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
  const administrator = { id:'03',email: 'abir.gharrad@dxc.com',password: hash };
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
  const administrator = { id:'04',email: 'abdallah.ghedamsi@dxc.com', password: hash };
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
  const administrator = { id:'05',email: 'adel.nbili@dxc.com', password: hash };
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