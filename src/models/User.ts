import bcrypt from "bcrypt";
import { Sequelize, Model, DataTypes, ModelDefined, Optional } from "sequelize";
import { sequelize } from '../database/database'


interface UserInstance extends Model {
  id?:string;
  username: string;
  password: string;
  avatarURL?: string;
}
interface UserCreationInstance extends Optional<UserInstance, 'id' |'username' | 'password' | 'avatarURL'> {}
const UserModel: ModelDefined<UserInstance, UserCreationInstance> = sequelize.define(
  "User", 
  {
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
    validate: {
      isAlphanumeric: {
        arg: true,
        msg:"The username can only contain letters and numbers"
      },
      len: {
        arg:[8, 127],
        msg: "The username needs to be between 3 and 5 characteres long"
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: {
        args: true,
        msg: "Email Invalid"
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      len: {
        args: [8, 127],
        msg: "The password needs to between 8 and 128 characteres long"
      }
    }
  },
  avatarURL: {
    type: DataTypes.STRING,
    defaultValue: "",
    validate: {
      len: {
        args: [0,1023],
        msg: "The length cannot be longer than 1024 characteres"
      }
    }
  }
})