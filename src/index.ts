import {app, httpServer} from './server/server'
import './database/sequelize'
require('dotenv').config()

async function main() {
  await httpServer.listen(app.get('port'))
  console.log('Server on port', app.get('port'))
}
main()
