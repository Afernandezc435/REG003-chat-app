import userModel from '../models/User'
import Sequelize from 'sequelize'
import messageModel from '../models/Message'
import channelModel from '../models/Channel'
import { sequelize }  from '../database/sequelize'

const createModels = ():object  => {
  const models:object = {
    sequelize,
    Sequelize,
    userModel,
    messageModel,
    channelModel

  }
  return models
}
export default createModels