const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello from Jenkins ECS Deployment!");
});

server.listen(3000, () => console.log("App running on port 3000"));