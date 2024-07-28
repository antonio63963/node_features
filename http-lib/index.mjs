import http from "http";
import Handlers from "./handlers.mjs";

const PORT = 5000;

const server = http.createServer((req, res) => {
  console.log("method: ", req.method, 'url: ', req.url, 'Type: ', req.headers['content-type']);

  if(req.method === "GET" && req.url === '/') {
    Handlers.getHome(req, res);
    return;
  }
  if (req.method === "GET" && req.url === "/html") {
    Handlers.getHTML(req, res);
    return;
  }
  if (req.method === "GET" && req.url === "/text") {
    Handlers.getText(req, res);
    return;
  }
  if (req.method === "GET" && req.url === "/users") {
    Handlers.getUsers(req, res);
    return;
  }
  if(req.method === "POST" && req.url === "/users") {
    console.log('wowo')
    Handlers.postUser(req, res);
    return;
  }

  Handlers.handleNotFound(req, res);
});

server.listen(PORT, () => console.log(`Server was launched on port ${PORT}`));
