const express = require('express');
const api = express.Router();
//const routerStudents = require('./students');

//api.use('/students', routerStudents)
api.get('/', (req, res) => { res.send({ message: 'Welcome Home!' }) });

module.exports = api;