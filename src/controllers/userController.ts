import modelUser, { } from '../models/User'
import bcrypt from 'bcrypt'
import * as service from '../services/User/user'
import { Request, Response } from 'express'
import userModel  from '../models/User'
import * as utils from '../utils/index'


//GET One
export const getUser = async(req: Request, res: Response) => {
  const token:string = utils.getToken(req)
  const userData = utils.decodeToken(token)
  try {
    const user = await userModel.findOne({
      where: {
        user_id: userData.user_id
      },
      raw: true
    })

    if (!user) {
      res.status(404).send({
        meta: {
          type: "error",
          status: 404,
          message: "not found"
        }
      })
    }
    res.status(200).send({
      meta: {
        type: "sucess",
        status: 200,
        message: ""
      },
      user: user
    })
  } catch (err) {
    console.log(err);
    res.status(500).send({
      meta: {
        type: "error",
        status: 500,
        message: "server error"
      }
    })
  }

}

//Update user
/*export const updateUser = async (req: any, res: Response) => {
try {
  const currentUserId = req.user_id;
  const {
    password,
    newPassword,
  } = req.body
  if (newPassword) {
    const user = await userModel.findOne({
      where: {user_id: currentUserId}
    })
    res.status(200).send({
      meta: {
        type: "sucess",
        status: 200,
        message: ""
      },
      createToken
    })
  }
} catch (err) {
    console.log(err)
    res.status(500).send({
      meta: {
        type: "error",
        status: 500,
        message: "server error"
      }
    })
}
}
*/