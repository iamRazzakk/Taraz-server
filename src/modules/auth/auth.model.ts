import { model, Schema } from "mongoose";
import { TUser } from "./auth.interface";

const userSchema = new Schema<TUser>({
    name: { type: String, required: [true, "Name is require"] },
    email: { type: String, required: [true, "Email is required"] },
    password: { type: String, required: [true, "Password is required"] },
    mobileNumber: { type: String, required: [true, "Mobile number is required"] }
});

// 3. Create a Model.
export const UserModel = model<TUser>('User', userSchema);