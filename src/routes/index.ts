import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { productRoutes } from '../modules/Product/product.routes';


const router = Router();
const appRouterModel = [
    {
        path: '/auth',
        routerFile: AuthRoutes
    },
    {
        path: "/product",
        routerFile: productRoutes
    }

];
appRouterModel.forEach(route => router.use(route.path, route.routerFile));
export const Routers = router;