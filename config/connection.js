// Set up MySQL connection.
var mysql = require("mysql");


var connection = mysql.createConnection({
  port: 3306,
  host: process.env.db_host || "y06qcehxdtkegbeb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: process.env.db_user || "i36rqeq3f7daim5k",
  password: process.env.db_pw || "p9pzsgwkpyn2m0g1",
  database: process.env.db || "w9olf47ly4eztejd"
});
//var connection;
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else {
//   connection = mysql.createConnection({
//     port: 3306,
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "burgers_db"
//   });

// }

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;