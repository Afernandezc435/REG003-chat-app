import { Model, DataTypes, ModelDefined, Optional } from "sequelize";
import { sequelize } from '../database/sequelize'
import  User from './User'
import Channel from './Channel'

interface MessageChatInstance extends Model {
  message_id?: string;
  user_id_sender: string;
  user_id_receipter: string;
  photo_url?: string;
  text?: string;
  channel_id?:string;
  user_id?: string;
  created_at?: Date;
  updated_at?: Date;
}
interface MessageChatCreationInstance extends Optional<MessageChatInstance, 'message_id' | 'user_id_sender' | 'user_id_receipter' | 'photo_url' | 'text' | 'channel_id' | 'user_id' | 'created_at' | 'updated_at'> {}
const MessageModel: ModelDefined<MessageChatInstance, MessageChatCreationInstance> = sequelize.define(
  "Message",
  {
    message_id: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    user_id_sender: DataTypes.STRING,
    user_id_receipter:DataTypes.STRING,
    photo_url: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: {
          args: [0,1023],
          msg: "The length cannot be longer than 1024 characters"
        }
      }
    },
    text: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: {
          args: [0, 9999],
          msg: "The length cannot be longer than 10000 characters"
        }
      }
    }
    
 
  })
  User.hasMany(MessageModel, { foreignKey: 'user_id_sender', sourceKey: 'user_id' });
  User.hasMany(MessageModel, { foreignKey: 'user_id_receipter', sourceKey: 'user_id' });
  Channel.hasMany(MessageModel, { foreignKey: 'channel_id', sourceKey: 'channel_id' });

  MessageModel.belongsTo(User, { foreignKey: 'user_id_sender', targetKey: 'user_id' })
  MessageModel.belongsTo(User, { foreignKey: 'user_id_receipter', targetKey: 'user_id' })
  MessageModel.belongsTo(Channel, { foreignKey: 'channel_id', targetKey: 'channel_id' })

  export default MessageModel;

  export {
    MessageChatCreationInstance
  }