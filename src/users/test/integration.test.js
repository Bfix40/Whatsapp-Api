const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it, before, after } = require('mocha');
const { toPromise } = require('../../utils/toPromise');
const app = require('../../app').app;
const userControllers = require('../users.controller')
chai.use(chaiHttp);

before(() => {
    userControllers.registerUser({
        fistname: 'Prueba-d',
        lastname: 'Testing',
        email: 'prueba@gmail.com',
        password: 'testing',
        phone: 555782584666,
    });
});

after(() => {
    const user = toPromise(userControllers.getUserByEmail("prueba@gmail.com"))
    userControllers.deleteUser(user.id)
})

describe('Suite of testing from integration for AUTH', () => {
    //! Test a ruta protegida
    it('Shuold return 401 when no jwt available', (done) => {
        chai.request(app)
            .get('/api/v1/users')
            .end((err, res) => {
                chai.assert.equal(res.status, 401);
                done();
            });
    });
    //! Test sin data
    it('Shuold return 400 when no data id provided', (done) => {
        chai.request(app)
            .post('/api/v1/auth/login')
            .end((err, res) => {
                chai.assert.equal(res.status, 400);
                done();
            });
    });
    //! Test a login con info correcta
    it('Shuold return 200 when jwt is valid', (done) => {
        chai.request(app)
            .post('/api/v1/auth/login')
            .set('content-type', 'application/json')
            .send({
                email: 'bfix38@gmail.com',
                password: '4038',
            })
            .end((err, res) => {
                chai.assert.equal(res.status, 200);
                chai.assert.typeOf(res.body.token, 'string');
                done();
            });
    });
});