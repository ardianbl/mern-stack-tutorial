import mongoose from "mongoose";

const productSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true // createdAt, updatedAt
});

const Product = mongoose.model("Product", productSchema);
// why "Product", not "products"?
// because mongoose will convert the naming into a plural form, and lower-capitalised the first letter

export default Product;