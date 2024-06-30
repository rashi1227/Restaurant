import express from 'express';
import { getDishes } from '../controller/diningController.js'

const router = express.Router();

router.get('/', getDishes);

export default router;
