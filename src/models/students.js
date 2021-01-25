const db_connection = require('../database/connection')

const dataModels = {
  getStudents: (callback) => {
    if (db_connection) {
      let sql = `select * from students`
      db_connection.query(sql, (err, rows) => {
        if (err) throw err
        callback(rows)
      })
    }
  },
  getStudentById: (data, callback) => {
    if (db_connection) {
      let sql = `select * from students where id = ${db_connection.escape(
        data
      )}`

      db_connection.query(sql, (err, rows) => {
        if (err) throw err
        callback(rows)
      })
    }
  },
  postStudent: (data, callback) => {
    if (db_connection) {
        let sql = `insert into students (name, lastname) values (${db_connection.escape(data.name)}, ${db_connection.escape(data.lastname)})`
        
        db_connection.query(sql, (err, rows) => {
            if (err) throw err
            callback({message: 'Student added successfull'})
      })
    }
  },
  deleteStudentById: (data, callback) => {
    if (db_connection){
        let sql = `delete from students where id = ${db_connection.escape(data)}`

        db_connection.query(sql, (err, rows) => {
            if (err) throw err
            callback({message: 'Student deleted successfull'})
        })
    }
  },
  putStudentById: (data, callback) => {
    if (db_connection){
        let sql = `update students set name = ${db_connection.escape(data.name)}, lastname = ${db_connection.escape(data.lastname)} where id = ${db_connection.escape(data.id)}`

        db_connection.query(sql, (err, rows) => {
            if (err) throw err
            callback({message: 'Student updated successfull'})
        })
    }
  },
}

module.exports = dataModels
