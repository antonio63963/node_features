import stream from 'stream';
import fs from 'fs';

// process.stdin.pipe(process.stdout)

const streamToFile = fs.createWriteStream('./public/console.txt');

process.stdin.pipe(streamToFile);

//Transform stream
const upperCaseStream = new stream.Transform({
  transform: (chunk, encoding, cb) => {
    const upperRes = chunk.toString().toUpperCase();
    cb(null, upperRes);
  }
})

const reverseStream = new stream.Transform({
  transform: (chunk, encoding, cb) => {
    const arrChar = chunk.toString().split('');
    const lastChar = arrChar.pop();
    cb(null, arrChar.reverse().concat(lastChar).join(''));
  }
})

process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout)