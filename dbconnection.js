var mysql = require('mysql');

// TO Do when pushed to server
var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'axnPwfquHjIyPbgW',
    database: 'pet_shelter'

});

// Test if connection works
/*
connection.connect(function (err) {
   if(err) throw err;
    console.log("Connected!");
});
*/

module.exports = connection;