import { Sequelize, Model, DataTypes, ModelDefined, Optional } from "sequelize";
import { sequelize } from '../database/sequelize'
import { getNewId } from "../utils/common";

interface ChannelInstance extends Model {
  channel_id?: string;
  name?: string;
  public?: boolean;
  message_group?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
interface ChannelCreationInstance extends Optional<ChannelInstance, 'channel_id' | 'name' | 'public' | 'message_group' | 'created_at' | 'updated_at'> {}
const ChannelModel: ModelDefined<ChannelInstance, ChannelCreationInstance>= sequelize.define(
  "channel",
  {
    channel_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: getNewId
    },
    name: DataTypes.STRING,
    public: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    message_group: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: true,
    tableName: 'channels',
    underscored: true,
  }
)

export default ChannelModel;