var request = require('supertest')
, app = require('../app')

describe ("citas",function(){
    it("gets some citas", function(done){
        request(app).get('/prov/cita/notsel')
        .expect(200,done)
    })
})



describe ("new doctor",function(){
    it("posts a doctor", function(done){
        request(app).post('/doctor/new')
        .send({nombre:'john',apellido:'smith',especialidad:1, hospital:'la paz'})
        .expect(302)
        .expect('Updated succesfully',done)
    })
})


describe ("new citas",function(){
    it("posts a cita", function(done){
        request(app).post('/citas/new')
        .send({hora_inicio:'11:00',hora_fin:'12:00',doctor_id:1, fecha:'1994-11-11'})
        .expect(302)
        .expect('Updated succesfully',done)
    })
})