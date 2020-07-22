var express = require('express')
var router = express.Router()


router.get('/',function(req,res){
    //console.log('ruta creada')
    res.render('nosotros.hbs',{title:'Nosotros',subtitulo:'Esta es la seccion en dodne hablamos de la empresa',contenido:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, minus dignissimos. Atque, corrupti. Autem, praesentium. Earsum, sunt blanditiis perspiciatis temporibus quos quam dolorum voluptatibus cum. Provident mollitia voluptate fugit repellendus?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, minus dignissimos. Atque, corrupti. Autem, praesentium. Earum, sunt blanditiis perspiciatis temporibus quos quam dolorum voluptatibus cum. Provident mollitia voluptate fugit repellendus?'})
})


module.exports = router