import dotenv from 'dotenv';
dotenv.config();
export default {
    PORT: process.env.PORT,
    URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV
};
