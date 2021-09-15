import { Model, DataTypes, ModelDefined, Optional } from "sequelize";
import { sequelize } from '../database/sequelize'
import User from './User'
import Channel from './Channel'

interface ChannelUserInstance extends Model {
  channel_id?: string;
  user_id: string;
  is_admin: Boolean;
  created_at?: Date;
}
interface ChannelCreationInstance extends Optional<ChannelUserInstance, 'channel_id' | 'user_id' | 'is_admin' | 'created_at'> {}
const ChannelUserModel: ModelDefined<ChannelUserInstance, ChannelCreationInstance>= sequelize.define(
  "ChannelUser",
  {
    channel_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    user_id: DataTypes.STRING,
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    timestamps: false
  }
)
const userId = ChannelUserModel.hasMany(User, {foreignKey: 'user_id'})
const channelId = ChannelUserModel.hasMany(Channel, {foreignKey: 'channel_id'})


ChannelUserModel.belongsTo(Channel, { foreignKey: 'channel_id', targetKey: 'channel_id' })
ChannelUserModel.belongsTo(User, { foreignKey: 'user_id', targetKey: 'user_id' })


Channel.hasMany(ChannelUserModel, {foreignKey: 'channel_id', sourceKey: 'channel_id'})
User.hasMany(User, {foreignKey: 'user_id', sourceKey: 'user_id'})


export default ChannelUserModel;