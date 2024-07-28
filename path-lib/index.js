const path = require('path');
const fs = require('fs')

const dirPath = 'nodeDir';

console.log(__dirname)
function createDir(pathDir) {
  const entirePath = path.join(__dirname, dirPath);
  if(fs.existsSync(entirePath)) {
    console.log(`Path  ${entirePath} is already exists.`)
    return entirePath;
  }
  fs.mkdir(entirePath, (err, path) => {
    if(err ) {
      return console.log(err)
    }else {
      console.log(entirePath)
    }
  });
  return entirePath;
} 

async function writeToFile() {
  return await fs.promises.writeFile(filePath, '\nconst v = " HOHNOHO"');
}

const newPath = createDir(dirPath)
const filePath = path.join(newPath, 'super.txt')
 writeToFile().then(() => {

   fs.promises.appendFile(filePath, '\nconst a = " Hehehe"').then((data) => console.log(`Created file ${data}`))
 });

console.log(path.parse(path.join(filePath)))

