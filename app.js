const mysql = require('mysql');
const express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;
const session = require('express-session');
const bodyparser = require('body-parser');
var cors = require('cors')


app.use(cors())
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost', //route
    user: 'root', //
    password: '12345',
    database: 'proyecto',
    multipleStatements: true
});


mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(port);

console.log('todo list RESTful API server started on: ' + port);


//get horarios not reserved
app.get('/citas', function(req, res) {
    mysqlConnection.query('SELECT * FROM cita, doctor WHERE \
      cita.doctor_id = doctor.id', [], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
  });
  

//post Doctores
app.post('/doctor/new', (req, res) => {
    let emp = req.body;
    var sql1 = "SET @nombre = ?; SET @apellido = ?; SET @especialidad = ?; SET @hospital = ?;\
    INSERT INTO doctor ( nombre, apellido, especialidad, hospital ) \
    VALUES ( @nombre, @apellido, @especialidad, @hospital)";
  
    mysqlConnection.query(sql1, [req.params.id, usercode], (err, rows, fields) => {
      if (!err)
          res.send('Updated successfully');
  
      else
          console.log(err);
  })
  });


//post Cita
app.post('/citas/new', (req, res) => {
    let emp = req.body;
    var sql1 = "SET @hora_inicio = ?; SET @hora_fin = ?; SET @doctor_id = ?; SET @fecha = ?;\
    INSERT INTO doctor ( hora_inicio, hora_fin, doctor_id, fecha ) \
    VALUES ( @hora_inicio, @hora_fin, @doctor_id, @fecha)";
  
    mysqlConnection.query(sql1, [req.params.id, usercode], (err, rows, fields) => {
      if (!err)
          res.send('Updated successfully');
  
      else
          console.log(err);
  })
  });


  module.exports = app;