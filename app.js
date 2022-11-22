const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const Route = require('./Router/Route');

app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(express.json())

app.use('/api', Route)




module.exports = app;