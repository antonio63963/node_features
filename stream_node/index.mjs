import fs from "fs";
import http from "http";

const PORT = 5000;

const server = http.createServer((req, res) => {
  console.log(req.method, req.url)
  if (req.method == "GET" && req.url === "/") {
    const stream = fs.createReadStream("./public/index.html");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    stream.pipe(res);
    
  } if(req.method === "GET" && req.url === '/file') {
    fs.readFile('./public/index.html', (err, data) => {
      if(err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plane');
        res.end('Something has gone wrong on our side...')
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    } )
  }
});

server.listen(PORT, () => console.log("Server has runned on port ", PORT));
