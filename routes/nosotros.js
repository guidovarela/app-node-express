var express = require('express')
var router = express.Router()

let data = {
    seccion1: {
        title:'Nosotros',
        subtitulo:'Esta es la seccion en dodne hablamos de la empresa',
        contenido:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, minus dignissimos. Atque, corrupti. Autem, praesentium. Earsum, sunt blanditiis perspiciatis temporibus quos quam dolorum voluptatibus cum. Provident mollitia voluptate fugit repellendus?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, minus dignissimos. Atque, corrupti. Autem, praesentium. Earum, sunt blanditiis perspiciatis temporibus quos quam dolorum voluptatibus cum. Provident mollitia voluptate fugit repellendus?',
        anio:new Date().getFullYear()
    },
    seccion2:{
        title:'Empleados del Mes',
        usuarios:[
            {
            nombre:'Jose',
            apellido:'Martinez',
            anioNac:1986,
            actividad:'Project Manager',
            img:'img1.jpg',
        },{
            nombre:'Maria',
            apellido:'Greco',
            anioNac:1996,
            actividad:'Developer',
            img:'img2.jpg',
        },{
            nombre:'Susana',
            apellido:'Gimenez',
            anioNac:1946,
            actividad:'evasora',
            img:'img3.jpg',
        }
    ]
    }
}
// let apirest = 'https://rickandmortyapi.com/api/character'
let anio = new Date().getFullYear()

router.get('/',function(req,res){
    //console.log('ruta creada')
    res.render('nosotros.hbs',{data:data,anio:anio})

})


module.exports = router