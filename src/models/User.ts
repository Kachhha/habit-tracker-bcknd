import { Schema, model, Document, Model } from 'mongoose';

// Interfejs użytkownika
interface IUser extends Document {
  username: string;
}

// Schemat użytkownika
const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
});

// Eksportuj model
const User = model<IUser>('User', userSchema);
export default User;
