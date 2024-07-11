import { Router } from 'express';
import { createHabit, getHabits, getHabitById, updateHabit, deleteHabit } from '../controllers/habitController';

const router = Router();

router.post('/habits', createHabit);
router.get('/habits', getHabits);
router.get('/habits/:id', getHabitById);
router.put('/habits/:id', updateHabit);
router.delete('/habits/:id', deleteHabit);

export default router;
