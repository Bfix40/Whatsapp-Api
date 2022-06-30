const { describe, it } = require('mocha');
const { toPromise } = require('../../utils/toPromise');
const assert = require('chai').assert;
const authControllers = require('../auth.controller')

describe('Suite of testing unitary for the authenticate controllers', () => {
    it('Testing to checkUserCredential', async (done) => {
        const [funct, err] = await toPromise(authControllers.checkUserCredential(
            'bfix04@gmail.com',
            '3840'
        ));

        assert.equal(funct, true);
        done()
    })
})