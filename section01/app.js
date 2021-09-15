const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>New Users</title></head>');
    res.write(
      '<body><form action="/newUser" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>List of Users</title></head>');
    res.write('<body><h1>Users List</h1><ol><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ol></body>'
              );
    res.write('</html>');
    return res.end();
  }
  
  if (url === '/newUser') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
});

server.listen(3000);