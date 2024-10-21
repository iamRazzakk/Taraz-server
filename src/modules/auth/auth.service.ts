import config from "../../config/config";
import { TUser } from "./auth.interface";
import { UserModel } from "./auth.model";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
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

// login user
const loginUser = async (email: string, password: string) => {
    const user = await UserModel.findOne({ email });
    if (!user) {
        throw new Error('Invalid email or password');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }
    const jwtPayload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        mobileNumber: user.mobileNumber,
        role: user.role,
    };
    const accessToken = jwt.sign(jwtPayload, config.JWT_SECRET as string, {
        expiresIn: config.JWT_E_IN as string,
    });
    return {
        accessToken,
    };
}

export const authService = {
    createUserIntoDB,
    loginUser
}