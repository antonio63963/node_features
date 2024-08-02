import express from "express";
import morgan from "morgan";
import qs from 'querystring';

const PORT = 5000;

const server = express();
server.use(morgan("combined"));

server.use(express.json()); // парсит json как и то, что ниже

server.use(express.urlencoded({extended: true})) // true use nested to urlencoded qs method, false  use 'querystring'
// parse form
// server.use((req, res, next) => {
//   if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
//     let data = "";
//     req.on("data", (chunk) => {
//       data += chunk;
//     });
//     req.on("end", () => {
//       console.log("Data x-www.... ", data);
//       req.body = qs.parse(data);
//       next();
//     });
//   } else {
//     next();
//   }
// });

//json parsing
// server.use((req, res, next) => {
//   let result = '';
//   req.on('data', (chanck) => {
//     result += chanck;
//   });
//   req.on('end', () => console.log('RESULT++++ ', result))
//   next();
// } )


server.use((req, res) => {
  console.log(req.url);
  console.log('BODY: ', req.body)
  res.send("Hello from server...");
});

server.listen(PORT, () => console.log(`Server launched on port ${PORT}`));
