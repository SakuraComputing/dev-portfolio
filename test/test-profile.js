const should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://localhost:5000/api/profile');


describe('Profile function', () => {

    it('should GET profile by the handle', (done) => {
        api.get('/handle/ewanbauld')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('should return a 404 when the route does not exist', (done) => {
        api.get('/handle/unknown')
            .set('Accept', 'application/json')
            .expect(404, done);
    });

    it('should make a valid POST request', () => {
        let handle1;
        api.post('/')
            .set('Accept', 'application/x-www-form-urlencoded')
            .send({
                handle: 'ewanbauld',
                company: "DHL",
                website: "www.thought.com",
                location: "Manchester",
                bio: "About me of course",
                status: "Web Dev",
                githubusername: "Testy",
                skills: "HTML,CSS"
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                handle1 = res.body
            })

    });
});