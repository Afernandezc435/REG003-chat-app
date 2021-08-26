const http = require('http');
const server = http.createServer();

function mensaje(petic, resp) {
  resp.writeHead(200, { 'content-type': 'text/plain' });
  resp.write('Hola Mundo');
  resp.end();
}
server.on('request', mensaje);

server.listen(3000, function () {
  console.log('La Aplicación está funcionando en el puerto 3000');
});
