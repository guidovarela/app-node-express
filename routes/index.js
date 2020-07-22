var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.send('Esto es el index')
  //res: response
  //render -> renderizar una vista en el navegador
  //render('path de la vista',{opciones de datos})
  res.render('index.hbs', { title: 'UTN BA',direccion:'Medrano 951',curso:'Webmaster Turno Tarde' });
});

module.exports = router;
