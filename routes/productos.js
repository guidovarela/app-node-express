var express = require('express')
var router = express.Router()

const productos = [
    {id : 1,nombre : 'Shampoo', descripcion : 'El mejor shampoo para niños', precio : 180, imagen : 'termo1.jpg', stock : 10},
    {id : 2, nombre : 'Jabon', descripcion : 'Jabon que hace mucha espuma en la ducha', precio : 210, stock : 10, imagen : 'bike1.jpg'},
    {id : 3, nombre : 'Esponja', descripcion : 'La MÁS suave de todas las esponjas del local', precio : 400, imagen : 'sillon1.jpg', stock : 10},
    {id : 4, nombre : 'Desinfectante', descripcion : 'Desinfectante con aroma a lavanda y mata el covid de un saque', precio : 520, stock : 10, imagen : 'zapa2.jpg'},
    {id : 5, nombre: 'Desodorante', descripcion : 'Nunca te voy a abandonar :D', precio : 120, imagen : 'zapa1.jpg', stock : 10},
    {id : 6, nombre: 'Sillon oficina', descripcion: 'No es un sillon cualquiera, este es negro, sube y baja como los otros, pero mejor', precio : 5000, imagen: 'sillon2.jpg', stock: 6}     
]
let legales = 'Al comprar estás asumiendo un compromiso. Haga todas las preguntas que quiera antes de ofertar, para que nuestro departamento de atención al cliente evacue tus dudas y puedas elegir correctamente el producto adecuado.'
let envios = 'ENVIOS x CORREO A TODO EL PAIS. <br> Podes cargarle tu dirección en la misma compra (tené en cuenta que tiene que haber alguien para recibirlo), o si no podés cargar la dirección de la sucursal del correo que elijas cercana a tu domicilio, tambien dirección de algún local adherido a pickit para que retires por ahí, siempre eligiendo a tu comodidad.'

router.get('/',function(req,res){
    let productosAll = productos.sort()
    res.render('productos',{productos:productosAll})
})
router.get('/:id', function(req,res) {
    //el metodo params devuelve 
    // console.log(req.params)
    let id = req.params.id
    //El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
    let producto = productos.find(producto => producto.id == id);
    
    res.render('producto',{producto : producto,legales : legales, envios : envios})
})


module.exports = router