import bcrypt from 'bcrypt';
import { SignJWT, jwtVerify } from 'jose';
import { db } from './db';

export const hashPassword = ( password ) => bcrypt.hash(password, 10);

export const comparePasswords = ( plainTextPassword, hashedPassword )=>
  bcrypt.compare(plainTextPassword, hashedPassword);

/* Create a JWT */
export const createJWT = (user) => {
    // return jwt.sign({ id: user.id }, 'cookies')
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 60 * 60 * 24 * 7; // 7 days
    
    return new SignJWT({ payload: { id: user.id, email: user.email } })
        .setProtectedHeader({ alg: "HS256" , typ: "JWT"})
        .setIssuedAt(iat)
        .setExpirationTime(exp)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(process.env.JWT_SECRET));

};

/* Verify a JWT */

export const verifyJWT = async (token) => {
    const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
    );
    return payload.payload as any;
};

/* Getting the JWT from cookies */ 

export const getUserIdFromCookies = async (cookies) => {
    const jwt = cookies.get(process.env.COOKIE_NAME);

    const { id } = await verifyJWT(jwt.value);

    const user = await db.user.findUnique({
        where: {
            id: id as string,
        },
    });

    return user;
};


