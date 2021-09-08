import bcrypt from "bcrypt";
import Sequelize from "sequelize";

/*export const User = sequelize.define(
  "User",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      set(value: string) {
        const hash = bcrypt.hashSync(value, 8);
        this.setDataValue("password", hash);
      },
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
    createdAt:false,
    updateAt: false,
  }
)

User.hashPassword = function(password: Number) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}
User.isValidPassword = function(password, hash) {
  return bcrypt.compareSync(hash, password)
}*/
