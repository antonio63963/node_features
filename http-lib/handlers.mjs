import UserProvider from "./data.mjs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import queryString from "querystring";

class Handlers {
  static getHome(req, res) {
    console.log(fs.existsSync("./public/index.html"));
    console.log("__DIRNAME: ", path.dirname(fileURLToPath(import.meta.url)));
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    fs.readFile(path.join(__dirname, "public/index.html"), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plane");
        res.end("Server Error...");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  }
  static getHTML(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello from server!!!</>");
  }
  static getText(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plane");
    res.end("Some text");
  }
  static getUsers(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(UserProvider.users));
  }

  //Post
  static postUserFromForm(req, res) {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => {
      try {
        res.statusCode = 200;
        console.log("BoDY: ", body);
        const userData = queryString.parse(body);
        UserProvider.addUser(userData);
        res.end("Everything is alright!");
      } catch (error) {
        res.statusCode = 400;
        res.end("Not valid form data!");
      }
    });
  }
  static postUser(req, res) {
    res.setHeader("Content-Type", "text/plane");
    if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
      this.postUserFromForm(req, res);
    } else if (req.headers["content-type"] === "application/json") {
      try {
        let reqData = "";
        req.on("data", (chank) => (reqData += chank));
        req.on("end", () => {
          res.statusCode = 200;
          UserProvider.addUser(JSON.parse(reqData));
          res.end("New user received.");
        });
      } catch (err) {
        res.statusCode = 400;
        res.end("Invalid JSON");
      }
    } else {
      res.statusCode = 400;
      res.end("Data must be in JSON format");
    }
  }

  static handleNotFound(req, res) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plane");
    res.end("Page not found...");
  }
}

export default Handlers;
