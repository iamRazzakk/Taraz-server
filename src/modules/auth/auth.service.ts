import { TUser } from "./auth.interface";
import { UserModel } from "./auth.model";
import bcrypt from "bcryptjs"
const createUserIntoDB = async (payload: TUser) => {
    // Check if a user with the same email already exists
    const existingUser = await UserModel.findOne({ email: payload.email });
    if (existingUser) {
        throw new Error('Email is already registered');
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const newUserPayload = {
        ...payload,
        password: hashedPassword,
    };

    const newUser = await UserModel.create(newUserPayload);
    return newUser;
};

export const authService = {
    createUserIntoDB
}