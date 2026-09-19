import express from 'express';
import { aiRecommendController } from '../controller/aiRecommend.controler.ts';

const router = express.Router();

router.post("/recommendByAi" ,aiRecommendController );

export default router;