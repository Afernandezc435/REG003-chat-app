import app from './server/server'
import server from './server/server'
import './database/database'
function main() {
  app.listen(app.get('port'))
  console.log('Server on port', app.get('port'))
}
main()
