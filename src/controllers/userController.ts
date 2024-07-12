import { Request, Response } from 'express';
import User from '../models/User';  // Zaktualizuj ścieżkę do właściwego pliku

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const getUsers = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
};
