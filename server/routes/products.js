import { Router } from 'express';
// import { products } from '../utils/constants.js';
import Product from '../models/product.models.js';

const router = Router();

router.get("/api/products", async (request, response) => {
    try {
        const {
            query: { search }
        } = request;

        if (search) {
            const wordRegex = new RegExp(search, 'i');

            if (search.toLowerCase() === 'men' || search.toLowerCase() === 'women') {
                // If it's a gender search, only search by exact gender match
                const filteredProducts = await Product.find({
                    'category.gender': search.toLowerCase()
                });
                return response.status(200).json(filteredProducts);
            }
            
            const filteredProducts = await Product.find({
                $or: [
                    { 'name': { $regex: wordRegex } },
                    { 'category.type': { $regex: wordRegex } },
                ]
            });
            return response.status(200).json(filteredProducts);
        }
        const products = await Product.find({});
        return response.status(200).send(products);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

router.get("/api/products/:id", async (request, response) => {
    try {
        const productId = request.params.id;
        const product = await Product.findById(productId);
        if (!product) return response.status(404).send({ msg: "Product not found" });
        return response.status(200).send(product);
    } catch (error) {
        if (error.name === 'CastError') {
            return response.status(400).json({ message: "Invalid product ID format" });
        }
        return response.status(500).json({ message: error.message });
    }
});

// for testing
router.post("/api/products", (request, response) => {
    const product = request.body;
    return response.status(200).send(product);
});

export default router;