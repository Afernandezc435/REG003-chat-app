import { readConfigFile } from "typescript"


import userModel from '../../models/User'
export const db: any = userModel
export default async (email: string): Promise<any> => {
  return await userModel.findOne({
    where: {email},
    raw: true
  })
}

