import { Request, Response } from 'express';
import Habit from '../models/habitModel';

// Tworzenie nowego nawyku
export const createHabit = async (req: Request, res: Response) => {
  try {
    const newHabit = new Habit(req.body);
    const savedHabit = await newHabit.save();
    res.status(201).json(savedHabit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Pobieranie wszystkich nawyków
export const getHabits = async (req: Request, res: Response) => {
  try {
    const habits = await Habit.find();
    res.status(200).json(habits);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Pobieranie nawyku po ID
export const getHabitById = async (req: Request, res: Response) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) return res.status(404).json({ message: 'Habit not found' });
    res.status(200).json(habit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Aktualizacja nawyku
export const updateHabit = async (req: Request, res: Response) => {
  try {
    const updatedHabit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedHabit) return res.status(404).json({ message: 'Habit not found' });
    res.status(200).json(updatedHabit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Usuwanie nawyku
export const deleteHabit = async (req: Request, res: Response) => {
  try {
    const deletedHabit = await Habit.findByIdAndDelete(req.params.id);
    if (!deletedHabit) return res.status(404).json({ message: 'Habit not found' });
    res.status(200).json({ message: 'Habit deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
