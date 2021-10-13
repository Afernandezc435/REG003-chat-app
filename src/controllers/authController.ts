import modelUser, { } from '../models/User'
import bcrypt from 'bcrypt'
import * as service from '../services/User/user'
import { Request, Response } from 'express'
import * as utils from '../utils/index'

export const comparePassword = async function(credentialsPassword : string, userPassword: string) {
  const isPasswordMatch = await bcrypt.compare(
    credentialsPassword,
    userPassword
  );
  return isPasswordMatch
}

export const signUp = async (
  req: Request,
  res: Response
) => {
  try {
    const data = req.body;
    if (!data.password || !data.email) {
      return res.status(403).send({
        meta: {
          type: "error",
          status: 403,
          message: "username and password are required"
        }
      })
    }
    
    if (await service.findUser(data.email)) {
      return res.status(403).send({
        meta: {
          type: "error",
          status: 403,
          message: `email: ${data.email} is already registered`
        }
      })
    }
    const user = await service.createUser(data)
    const result = JSON.parse(JSON.stringify(user))
    const token = utils.createToken(result.user_id, result.email, result.photo_url)
    
    /* response */
    res.status(201).send({
      meta: {
        type: "success",
        status: 201,
        message: ""
      },
      token: token
    });

  } catch (err) {
    console.log(err);
    res.status(500).send({
      meta: {
        type: "error",
        status: 500,
        message: "server error"
      }
    });
  }
}

  
export const signIn = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const user = await service.findUser(data.email)
    /* user not registered */
    if (!user) {
      return res.status(403).send({
        mata: {
          type: "error",
          status: 403,
          message: `this account ${data.email} is not yet registered`
        }
      })
    }
    /* validate password */

    const result = JSON.parse(JSON.stringify(user))

    const isPasswordValid = await comparePassword(
      data.password,
      result.password
    )

    /*invalid password */
    if (!isPasswordValid) {
      return res.status(403).send({
        meta: {
          type: "error",
          status: 403,
          message: "invalid password"
        }
      })
    }
    const token = utils.createToken(result.user_id, result.email, result.photo_url)
    
    /* response */
    res.status(200).send({
      meta: {
        type: "success",
        status: 200,
        message: ""
      },
      token: token
    });
    
  } catch (err) {
    console.log(err);
    res.status(500).send({
      meta: {
        type: "error",
        status: 500,
        message: "server error"
      }
    });
  }
}