const {  getAllProducts, getOneProducts, addToCart, findCart } = require('../Controller/Controller');

const Route = require('express').Router();

Route.get('/products', getAllProducts)
Route.get('/products/:id', getOneProducts)
Route.post('/carts', addToCart)
Route.get('/carts/:email', findCart)


module.exports = Route