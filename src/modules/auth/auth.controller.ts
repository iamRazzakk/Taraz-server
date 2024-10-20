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


export const authController = {
    createUserController
}