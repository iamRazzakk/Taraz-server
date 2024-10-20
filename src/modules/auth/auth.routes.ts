import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { authValidations } from "./auth.validation";
import { authController } from "./auth.controller";

const routes = Router()
routes.post('/register', validateRequest(authValidations.singUpValidation), authController.createUserController)

export const AuthRoutes = routes