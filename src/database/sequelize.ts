
const { Sequelize} = require('sequelize')
require('dotenv').config()


export const sequelize = new Sequelize(process.env.DATABASE_URL || `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`, {
  dialect: "postgres",
  port: 5432,
});

sequelize.authenticate()