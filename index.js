const { default: mongoose } = require('mongoose');
const app = require('./app');
require('dotenv').config();
const dbUrl = process.env.DB_URL;

const connectDb = async () => {
    try {
        await mongoose.connect(dbUrl)
        console.log(`Db connected`)
    } catch (error) {
        console.log(error);
    }
}

app.get('/', (req, res) => {
    res.status(200).send("Welcome to Power Zone server")
})

app.listen(process.env.PORT || 4001, () => {
    console.log(`Server is running at ${process.env.PORT || 4001}`);
    connectDb()
})