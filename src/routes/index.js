const router = require('express').Router()
const routerStudents = require('./students')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')


router.use('/docs', swaggerUi.serve)
router.get('/docs', swaggerUi.setup(swaggerDocument))

router.get('/', (req, res) => {
  res.send({ message: 'Welcome Home!' })
})
router.use('/students', routerStudents)

module.exports = router
