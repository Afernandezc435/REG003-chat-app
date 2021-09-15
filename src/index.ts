import app from './server/server'
import './database/database'
require('dotenv').config()

async function main() {
  await app.listen(app.get('port'))
  console.log('Server on port', app.get('port'))
}
main()
