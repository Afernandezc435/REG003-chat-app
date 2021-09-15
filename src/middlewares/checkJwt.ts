import jwt from "express-jwt";
import * as dotenv from "dotenv";
dotenv.config();

import {getToken} from '../utils'

const checkJwt = jwt({ 
  secret: Buffer.from(process.env.JWT_SECRET || 'develop', 'base64'),
  algorithms: ['HS256'],
  credentialsRequired: false,
  getToken: getToken
})

export {
  checkJwt
}