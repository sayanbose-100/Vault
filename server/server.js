import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/index.js';
import logFile from './middlewares/logFile.js';
import {connectDb,seedProducts} from './database/db.js';
import 'dotenv/config';
import Product from './models/product.models.js';

const app = express();
app.use(cors(
    {
        origin: '*',
        methods: 'GET, POST, PUT, DELETE',
        allowedHeaders: 'Content-Type, Authorization',
        credentials: true,
    }
))

// middlewares
app.use(express.static('./public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logFile);

// Homepage route
app.get("/", async (request, response) => {
    try {
        const products = await Product.find({});
        return response.status(200).send(products);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

// routes middleware
app.use(router);
    
// mongodb server connection and server listening
connectDb().
then(() => {
    // seedProducts(); // for seeding products in the database
    app.listen(process.env.PORT||5000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.error("Some error has occured",err);
    process.exit(1);
});
