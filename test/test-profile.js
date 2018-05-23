const should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://localhost:5000/api/profiles');


describe('Profile function', () => {

    it('should get a test profile', (done) => {
        api.get('/profile')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('should return a 404 when the route does not exist', (done) => {
        api.get('/notfound')
            .set('Accept', 'application/json')
            .expect(404, done);
    })
});