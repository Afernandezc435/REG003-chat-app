import app from './server/server'
import './database/sequelize'
require('dotenv').config()

async function main() {
  await app.listen(app.get('port'))
  console.log('Server on port', app.get('port'))
}
main()
