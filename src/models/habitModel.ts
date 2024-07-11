import mongoose, { Schema, Document } from 'mongoose';

export interface IHabit extends Document {
  name: string;
  description?: string;
  frequency: string;
  startDate: Date;
  endDate?: Date;
}

const HabitSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  frequency: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
});

export default mongoose.model<IHabit>('Habit', HabitSchema);
