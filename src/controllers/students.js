const util = require('util')
const db_connection = require('../database/connection')
const query = util.promisify(db_connection.query).bind(db_connection)

/**
 * @function getStudents
 * @description Controller for GET /api/v1/students/
 * @param {Object} res
 */

const getStudents = async (req, res) => {
  try {
    let sql = `select * from students`
    const rows = await query(sql)
    res.status(200).json(rows)
  } catch (err) {
    console.error(`there was an error: ${err}`)
  }
}

/**
 * @function getStudentById
 * @description Controller for GET with StudentID /api/v1/students/:id
 * @param {Object} req
 * @param {Object} res
 */

const getStudentById = async (req, res) => {
  const { id } = req.params
  try {
    let sql = `select * from students where id = ${db_connection.escape(id)}`
    const rows = await query(sql)
    // if ID not exist...
    if (rows.length === 0) {
      res.status(404).json({ message: 'ID not exist' })
    } else {
      // if ID EXIST...
      res.status(200).json(rows)
    }
  } catch (err) {
    console.error(`there was an error: ${err}`)
  }
}

/**
 * @function postStudent
 * @description Controller for POST student /api/v1/students/
 * @param {Object} req
 * @param {Object} res
 */

const postStudent = async (req, res) => {
  const { name, lastname } = req.body
  try {
    let sql = `insert into students(name, lastname) values (${db_connection.escape(name)}, ${db_connection.escape(lastname)})`
    const rows = await query(sql)
    res.status(201).json({ message: 'Added student successfull' })
  } catch (err) {
    console.error(`there was an error: ${err}`)
  }
}

/**
 * @function putStudentById
 * @description Controller for PUT with StudentID /api/v1/students/:id
 * @param {Object} req
 * @param {Object} res
 */

const putStudentById = async (req, res) => {
  const { id } = req.params
  const {name, lastname} = req.body
  try{
    let sql = `update students set name = ${db_connection.escape(name)}, lastname = ${db_connection.escape(lastname)} where id = ${db_connection.escape(id)}`
    const rows = await query(sql)
    res.status(201).json({ message: 'Updated student successfull' })
  }catch (err) {
    console.error(`there was an error: ${err}`)
  }
}

/**
 * @function deleteStudentById
 * @description Controller for DELETE with StudentID /api/v1/students/:id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

const deleteStudentById = async (req, res) => {
  const { id } = req.params
  try{
    let sql = `delete from students where id = ${db_connection.escape(id)}`
    const rows = await query(sql)
    res.status(200).json({ message: 'Delete student successfull' })
  }catch(err){
    console.error(`there was an error: ${err}`)
  }
}

module.exports = {
  getStudents,
  getStudentById,
  postStudent,
  putStudentById,
  deleteStudentById
}
