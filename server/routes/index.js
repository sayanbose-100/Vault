import { Router } from 'express';
import productsRoutes from './products.js';

const router = Router();

router.use(productsRoutes);

export default router;