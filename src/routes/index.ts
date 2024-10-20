import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';


const router = Router();
const appRouterModel = [
    {
        path: '/auth',
        routerFile: AuthRoutes
    },

];
appRouterModel.forEach(route => router.use(route.path, route.routerFile));
export const Routers = router;