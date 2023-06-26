import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

export default (req: Request, res: Response, next: NextFunction) => {
    // Get the jwt token from the request body Obj
    const token = req.body.token

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err: string, decoded: {
            _id: string
        }) => {
            if (err) {
                // If the token verification fails, return an error response
                return res.status(401).json({ success: false, error: 'Invalid token' });
            }

            // Add the _id property to the req ->  body -> payload object
            // console.log(decoded)
            req.body.userID = decoded._id

            // Call the next middleware or route handler
            next();
        });
    } else {
        // If the authorization header is not provided, return an error response
        return res.status(401).json({ success: false, error: 'No token provided' });
    }
};
