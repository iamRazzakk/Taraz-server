import dotenv from 'dotenv';
dotenv.config();
export default {
    PORT: process.env.PORT,
    URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_E_IN: process.env.JWT_E_IN
};
