const jwt = require('jsonwebtoken');

export const generateAccessToken = ( _id: string | undefined , expiresIn:string = "1d"):string => {
    const encodedToken = jwt.sign({_id}, process.env.JWT_SECRET , { expiresIn})
    return encodedToken
}