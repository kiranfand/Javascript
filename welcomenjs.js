const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to Node.js\n');
});

server.listen(5000, 'localhost', () => {
  console.log('Server running at http://localhost:5000/');
});
