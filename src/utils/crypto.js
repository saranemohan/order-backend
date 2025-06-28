import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const verifyAccessToken = (token) => {
    const secret = JWT_SECRET;
    return jwt.verify(token, secret);
};
