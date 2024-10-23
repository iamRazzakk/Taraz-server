import httpStatus from 'http-status';
import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { productService } from "./Product.service";
import sendResponse from "../../utils/sendResponse";


const createProductIntoDB = catchAsync(async (req: Request, res: Response) => {
    const result = req.body;
    const product = await productService.createProduct(result);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Product created successfully",
        data: product,
    });
})
const getAllProductsFromDB = catchAsync(async (req: Request, res: Response) => {
    const products = await productService.getAllProducts();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Get all Products successfully",
        data: products,
    });
})
export const productController = {
    createProductIntoDB,
    getAllProductsFromDB
}