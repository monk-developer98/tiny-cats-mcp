import express from 'express';
import { createCatController, getAllCatController, getSingleCatController, recommendCatsController, searchCatController } from '../controller/cat.controller.ts';

const router = express.Router();

router.post("/create", createCatController);
router.get("/search/all", searchCatController);
router.get("/", getAllCatController);
router.get("/:id", getSingleCatController);
router.post("/recommend", recommendCatsController);

export default router;