import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import httpStatus from 'http-status';
import { Routers } from './routes';
const app = express();
app.use(cookieParser());

//parser
app.use(express.json());
app.use('/api/v1', Routers);
//Testing
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Welcome to the Taraz API',
  });
});


export default app;
