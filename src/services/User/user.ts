import { sequelize } from '../../database/sequelize'
import {Transaction} from 'sequelize'
import models from '../../models/index'
import modelUser, {UserInstance} from '../../models/User'
import {getNewId} from '../../utils/common'


//crud user


const createUser = async (input:any) => {
  const user = await sequelize.transaction(
    async (transaction:Transaction)  => {
      //const avatarBase64Img = generateRandomImg();
      //const photo_url = await saveBase64Img(avatarBase64Img);
      let data:any = {}
      
      data.name = input.name
      data.email = input.email
      data.password = input.password
      data.photo_url = input.photo_url

      const userData = await modelUser.create(data, {
        transaction
      });
      const user = userData.get({ plain: true });
      
      return user;
    }
  )

  return user
};

const findUser = async (email:string) => {
  const user = await modelUser.findOne({
    where: {
      email: email
    },
    raw: true
  })

  return user
};



export {
  createUser,
  findUser
}