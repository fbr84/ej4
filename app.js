//https://github.com/fbr84/ej4

const express = require('express')
const app = express()

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'})
})
app.get('/products', (req, res) => {
    const productos = [
        {title:"Play 5", precio: "600"},
        {title:"Viaje", precio: "800"},
        {title:"Patinete", precio: "400"},
        {title:"Audi", precio: "10000"},
        {title:"Cascos", precio: "50"},
        {title:"Ordenador", precio: "1000"},
        {title:"Zapatillas", precio: "100"},
        {title:"Entrada Concierto", precio: "200"},
        {title:"Crucero", precio: "500"},
        {title:"Bici", precio: "600"}
    ]
    res.render('products', {title: 'Products', productos})
})
app.use((req, res) => {
    res.status(404).render('404',{title: '404'})
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Conectando al puerto ${PORT}`)
})