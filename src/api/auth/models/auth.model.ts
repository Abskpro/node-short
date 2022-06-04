import { IUser } from "../types/types";

import {Schema, model} from 'mongoose';

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  last_login: {
    type: Date,
  },
});

const User = model<IUser>("User", UserSchema);

export default User;
