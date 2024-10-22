import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "./product.validation";
import { productController } from "./product.controller";

const route = Router()
// create routes
route.post("/create", validateRequest(ProductValidation.createProductValidation), productController.createProductIntoDB)

export const productRoutes = route