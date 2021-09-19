/* const createUser  = () => {
  console.log('Hola')
}
const findUser  = () => {
 console.log('Chao') 
}
export {
  createUser,
  findUser
}*/
import {findUser} from '../user'
import userModel from '../../models/User'
const db: any = userModel
export default async (email: string): Promise<any> => {
  return await userModel.findOne({
    where: {email},
    raw: true
  })
}
