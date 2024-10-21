import { Request, Response } from "express";
import { authService } from "./auth.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status"
const createUserController = catchAsync(async (req: Request, res: Response) => {
    const userData = req.body;
    // Create the new user using the service
    const newUser = await authService.createUserIntoDB(userData);

    // Send the response with the full user object and tokens
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'User created successfully',
        data: newUser,
    });
});


// login
const loginUserController = catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await authService.loginUser(email, password);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Login successful',
        data: user,
    });
});

export const authController = {
    createUserController,
    loginUserController
}