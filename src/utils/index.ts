import jwt from 'jsonwebtoken'
import {Request, Response} from 'express'


const createToken = (user_id:string, email:string, photo_url:string ):string => {
  return jwt.sign(
    { user_id, email, photo_url }, 
    process.env.JWT_SECRET || 'develop', 
    {expiresIn: 86400}
  );
}

const decodeToken = (token:string ):any => {
  let decoded:any
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET || 'develop');
  } catch(err) {
    throw err
  }
  
  return decoded
}

const getToken = (req:Request):string => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    return req.query.token.toString();
  }
  return '';
}

export {
  createToken,
  getToken,
  decodeToken
}