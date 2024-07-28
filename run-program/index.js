
const fs = require('fs');
const path = require('path');

console.log(process.argv); // читает аргументы: node index.js <fileName> <LinesQty>

const progArgs = process.argv;

if(!progArgs[2] && !progArgs[3]) {
  console.log('Miss arguments...')
  process.exit(0)
}

const fileName = progArgs[2];
const amount = parseInt(progArgs[3])

if(isNaN(amount)) {
  console.log('Amount sent as string, not as num!')
  process.exit(0);
}

const writeStream = fs.createWriteStream(path.join('./public', fileName));
for (let i = 1; i <= amount; i++) {
 writeStream.write(`new sentence ${i}\n`)
}
writeStream.end(() => console.log('Write stream finished ', performance.now()))