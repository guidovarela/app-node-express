var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.send('Esto es el index')
  //res: response
  var datos = {
    title:'UTN BA',
    sedes: [
      {
        nombre: 'UTN BA',
        direccion:'Medrano 951',
        curso:'Webmaster Turno Tarde',
        img:'images/medrano.jpg'
      },
      {
        nombre: 'UTN Campus',
        direccion: 'Mozart 255',
        curso:'ingreso Ingenierias',
        img:'images/campus.jpg'
      },
      {
        nombre:'UTN - INSPT',
        direccion:'Av. Trinvirato 3520',
        curso:'Profesorado Tecnico',
        img:'images/inspt.jpg'
      }
    ],
    anio:new Date().getFullYear()
    }
  //render -> renderizar una vista en el navegador
  //render('path de la vista',{opciones de datos})
  res.render('index.hbs', datos);
});

module.exports = router;
