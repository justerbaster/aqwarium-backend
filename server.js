const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Aqwarium backend placeholder. Add your code from the project archive.');
});
server.listen(port, '0.0.0.0', () => {
  console.log('Placeholder server on port', port);
});
