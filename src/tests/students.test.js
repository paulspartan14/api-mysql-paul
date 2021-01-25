const request = require('supertest')
const app = require('../app')

/*
testing get students endpoint
*/
describe('GET /students', () => {
  it('respond with json containing a list of all students', (done) => {
    request(app)
      .get('/api/v1/students')
      .set('accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200, done)
  })
})

describe('POST /students', () => {
  it('respond with json "Added student successfull" when student added successfull', (done) => {
    request(app)
      .post('/api/v1/students')
      .send({
        name: 'Andres',
        lastname: 'Perez',
      })
      .set('accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
})

describe('GET /students/:id', () => {
  it('respond with json containing a single student', (done) => {
    request(app)
      .get('/api/v1/students/1')
      .set('accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200, done)
  })

  it('respond with json student when student exists', (done) => {
    request(app)
      .get('/api/v1/students/1')
      .set('accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200)
      .expect('[{"id":1,"name":"Paul","lastname":"Mena"}]')
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })

  it('respond with json "ID not exist" when student not exist', (done) => {
    request(app)
      .get('/api/v1/students/00123')
      .set('accept', 'application/json')
      .expect('content-type', /json/)
      .expect(404)
      .expect('{"message":"ID not exist"}')
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
})

describe('PUT /students/:id', () => {
  it('respond with json "Updated student successfull" when student updated successfull', (done) => {
    request(app)
      .put('/api/v1/students/7')
      .send({
        name: 'Andres',
        lastname: 'Perez',
      })
      .set('accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
})

describe('DELETE /students/:id', () => {
  it('respond with json "Delete student successfull" when students delete successfull', (done) => {
    request(app)
      .delete('/api/v1/students/7')
      .set('accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
})
