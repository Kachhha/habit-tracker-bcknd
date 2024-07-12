import express from 'express';
import { getHabits } from '../controllers/habitController';

const router = express.Router();

router.get('/habits', getHabits);

export default router;
