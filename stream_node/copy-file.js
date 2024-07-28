const fs = require('fs');
const path = require('path');

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const readStream = fs.createReadStream('./public/console.txt');
const writeStream = fs.createWriteStream('./public/double-console.txt');

readStream.pipe(writeStream);

readStream.on('end', () => console.log('End of readStream...'))
writeStream.on('end', () => console.log('End of writeStream...')) // not works
writeStream.on('finish', () => console.log('File has copied successful!'))
writeStream.on('close', () => console.log('WriteStream closed!'))
