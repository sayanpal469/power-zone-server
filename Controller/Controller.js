const Products = require('../models/productsModel');
const CartItems = require('../models/cartModel');


const getAllProducts = async (req, res) => {
    try {
        const products = await Products.find()
        res.status(202).send(products)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getOneProducts = async (req, res) => {
    try {
        const product = await Products.find({
            _id: req.params.id
        })
        res.status(202).send(product)
    } catch (error) {
        res.status(500).send(error)
    }
}

const addToCart = async (req, res) => {
    try {
        const cartsItem = await new CartItems({
            email: req.body.email,
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            category: req.body.category
        })
        cartsItem.save()
        if (cartsItem) {
            res.status(200).json({
                success: true,
                cartsItem
            })
        } else {
            res.status(404).send('Not added')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const findCart = async (req, res) => {
    try {
        const findItem = await CartItems.find({
            email: req.params.email
        })
        if (findItem) {
            res.status(202).send(findItem)
        } else {
            res.status(404).send('Product not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getAllProducts,
    getOneProducts,
    addToCart,
    findCart
}