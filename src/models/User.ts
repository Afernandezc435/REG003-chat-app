import bcrypt from "bcrypt";
import { getNewId} from "../utils/common"
import { Model, DataTypes, ModelDefined, Optional } from "sequelize";
import { sequelize } from '../database/sequelize'

const hashPasswordIfChanged = async (user:any, options:any) => {
  const SALT_FACTOR = 10;
  if (user.changed("password")) {
    const hashedPassword = await bcrypt.hash(user.password, SALT_FACTOR);
    // eslint-disable-next-line
    user.password = hashedPassword;
    return hashedPassword;
  }
};

interface UserInstance extends Model {
  user_id?: string;
  name: string;
  email: string;
  password: string;
  photo_url?: string;
}
interface UserCreationInstance extends Optional<UserInstance, 'user_id' |'name' |'email'| 'password' | 'photo_url'> {}

const UserModel: ModelDefined<UserInstance, UserCreationInstance> = sequelize.define(
  "user", 
  {
  user_id: {
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: getNewId
  },
  name: {
    type: DataTypes.STRING,
    validate: {
      isAlphanumeric: {
        arg: true,
        msg:"The username can only contain letters and numbers"
      },
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
    },
  },
  photo_url: {
    type: DataTypes.STRING,
    defaultValue: "",
    validate: {
      len: {
        args: [0,1023],
        msg: "The length cannot be longer than 1024 characteres"
      }
    }
  }
  
}, {
  timestamps: true,
  tableName: 'users',
  underscored: true,
  hooks: {
    beforeCreate: hashPasswordIfChanged,
    beforeUpdate: hashPasswordIfChanged
  }
})

export default UserModel;
export {
  UserModel,
  UserInstance
}
;