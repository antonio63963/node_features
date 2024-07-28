const fs = require("fs/promises");

const onFileDone = () => console.log("File has been wrote!+++++");

async function createFile() {
await fs.writeFile("./new-file.txt", "Some interesting string...", onFileDone);
await fs.readFile("./new-file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
}

 createFile().then((res) => {
   fs.appendFile(
     "./new-file.txt",
     "\n Other one interesting string...",
     onFileDone
   );

 })

