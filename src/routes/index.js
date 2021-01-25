const router = require('express').Router()
const routerStudents = require('./students')

router.get('/', (req, res) => {
  res.send({ message: 'Welcome Home!' })
})
router.use('/students', routerStudents)

module.exports = router
