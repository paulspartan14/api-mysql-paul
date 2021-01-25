const dataModels = require('../models/students')

/**
 * @function getStudents
 * @description Controller for GET /api/v1/students/
 * @param {Object} res
 */

const getStudents = (req, res) => {
  dataModels.getStudents((data, err) => {
    return res.status(200).send({
      data,
    })
  })
}

/**
 * @function getStudentById
 * @description Controller for GET with StudentID /api/v1/students/:id
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 */

const getStudentById = (req, res) => {
  const { id } = req.params
  dataModels.getStudentById(id, (data, err) => {
    return res.status(200).send({
      data
    })
  })
}

/**
 * @function postStudent
 * @description Controller for POST student /api/v1/students/
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 */

const postStudent = (req, res) => {
  const {name, lastname} = req.body
  dataModels.postStudent({name, lastname}, (data, err) =>{
    return res.status(201).send({
      data
    })
  })
}

/**
 * @function putStudentById
 * @description Controller for PUT with StudentID /api/v1/students/:id
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 */

const putStudentById = (req, res) => {
  const { id } = req.params
  const { name, lastname} = req.body
  dataModels.putStudentById({ id, name, lastname }, (data, err) =>{
    return res.status(201).send({
      data
    })
  })
  
}

/**
 * @function deleteStudentById
 * @description Controller for DELETE with StudentID /api/v1/students/:id
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 */

const deleteStudentById = (req, res) => {
  const { id } = req.params
  dataModels.deleteStudentById(id, (data, err) => {
    return res.status(200).send({
      data
    })
  })
}

module.exports = {
  getStudents,
  getStudentById,
  postStudent,
  putStudentById,
  deleteStudentById,
}
