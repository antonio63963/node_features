import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs';

const PORT = 8000;
const STATIC_PATH = path.join(process.cwd(), './static'); // supposed that static exists in folder where was running porcess
const toBool = [() => true, () => false];

const MIME_TYPES = {
  default: 'application/octet-stream',
  html: 'text/html; charset=UTF-8',
  js: 'application/javascript; charset=UTF-8',
  css: 'text/css',
  png: 'image/png',
  jpg: 'image/jpg',
  gif: 'image/gif',
  ico: 'image/x-icon',
  svg: 'image/svg+xml',
}

const server = http.createServer(async (req, res) => {
  const file = await prepareFile(req.url);
  const statusCode = file.found ? 200 : 404;
  const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
  res.writeHead(statusCode, {'Content-Type': mimeType});
  file.stream.pipe(res);
  console.log(`${req.method} ${req.url} ${statusCode}`)

}).listen(PORT, () => console.log(`Server started on port ${PORT}`))


const prepareFile = async (url) => {
  const paths = [STATIC_PATH, url];
  if(url.endsWith('/')) paths.push('index.html');
  const filePath = path.join(...paths);
  const isTraversalPath = !filePath.startsWith(STATIC_PATH);
  const exists = fs.promises.access(filePath).then(...toBool); // accept 2 args onFullfild, onReject
  const found = !isTraversalPath && exists;
  const streamPath = found ? filePath : STATIC_PATH + '/404.html';
  const ext = path.extname(streamPath).substring(1).toLowerCase();
  const stream = fs.createWriteStream(streamPath);
  return {found, ext, stream };
}