import express from 'express';
import { createProduct, deleteProduct, getProduct, updateProduct } from '../controllers/productControllers.js';

const router = express.Router();

router.get("/", getProduct);

router.post("/", createProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;