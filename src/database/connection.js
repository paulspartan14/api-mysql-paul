require('dotenv').config();
const mysql2 = require('mysql2');

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
 } = process.env
 
 const objectConnection = {
   host: DB_HOST,
   port: DB_PORT,
   user: DB_USER,
   password: DB_PASSWORD,
   database: DB_NAME
 }

 const myConn = mysql2.createConnection(objectConnection);

 myConn.connect((err) => {
   if (err){
     console.log(`ha ocurrido un error: ${err}`)
   }else{
     console.log('connection successfull')
   }
 })

