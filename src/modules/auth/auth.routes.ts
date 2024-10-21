import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { authValidations } from "./auth.validation";
import { authController } from "./auth.controller";

const routes = Router()
routes.post('/register', validateRequest(authValidations.singUpValidation), authController.createUserController)
routes.post('/login', authController.loginUserController)

export const AuthRoutes = routes