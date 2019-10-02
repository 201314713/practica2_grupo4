var request = require('supertest')
, app = require('../app')

describe ("citas",function(){
    it("should gets some citas", function(done){
        request(app).get('/citas')
        .expect(200,done)
    })
    
})

describe ("doctores",function(){
    it("should gets some doctors", function(done){
        request(app).get('/doctor')
        .expect(200,done)
    })
    
})



describe ("new doctor",function(){
    it("should post a doctor", function(done){
        request(app).post('/doctor/new')
        .send({nombre:'john',apellido:'smith',especialidad:'creo que soy doctor', hospital:1})
        .expect(200,done)
    })
    it("should fail posting a doctor", function(done){
        request(app).post('/doctor/new')
        .send({nombre:1,apellido:'smith',especialidad:'creo que soy doctor', hospital:'I should be a number'})
        .expect(200,done)
    })
})


describe ("new citas",function(){
    it("should post a cita", function(done){
        request(app).post('/citas/new')
        .send({hora_inicio:'11:00',hora_fin:'12:00',doctor_id:1, fecha:'1994-11-11'})
        .expect(200,done)
    })
    it("should fail posting a cita", function(done){
        request(app).post('/citas/new')
        .send({j:1,hora_fin:2,doctor_id:'I should be a number', fecha:'1994-11-11'})
        .expect(200,done)
    })
})

describe ("status",function(){
    it("should get some status", function(done){
        request(app).get('/citas/status')
        .expect(200,done)
    })
})

describe ("new status",function(){
    it("should post a status", function(done){
        request(app).post('/citas/status')
        .send({id:1 , status:1})
        .expect(200, done)
    })
    it("should fail posting a status", function(done){
        request(app).post('/citas/status')
        .send({id:"hola" , status:"hola"})
        .expect(200, done)
    })
})

describe ("new result",function(){
    it("should post a result", function(done){
        request(app).post('/citas/result')
        .send({descripcion:'sin anomalias',peso:130.00,altura:1.66, temperatura:36.00,citaid:1})
        .expect(200, done)
    })
    it("should fail posting a result", function(done){
        request(app).post('/citas/result')
        .send({descripcion:1,peso:" ",altura:1.66, temperatura:36.00,citaid:1})
        .expect(200, done)
    })
})