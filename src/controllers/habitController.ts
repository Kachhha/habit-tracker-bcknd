import { Request, Response } from 'express';
import Habit from '../models/habitModel';

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const getHabits = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const habits = await Habit.find();
    res.json(habits);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
};
