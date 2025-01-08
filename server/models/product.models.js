import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    category: {
        gender: {
            type: String,
            required: true,
            enum: ['men', 'women']
        },
        type: {
            type: String,
            required: true
        }
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);