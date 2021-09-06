
require('dotenv').config()
const { Sequelize, DataTypes} = require('sequelize')
const uri = process.env.DATABASE_URL || `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
console.log(uri)
const sequelize = new Sequelize(uri)
const main = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await buildModels()
    console.log('Sync Models.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
const buildModels = async () => {
  const User = sequelize.define('user', {
    nickname: {
      type: DataTypes.STRING, 
      allowNull: false,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING
    },
  }, {})
  User.sync()
}
main()