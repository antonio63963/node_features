import fs, { read } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log("dir: ", __dirname);

const aimDirName = "./public";
const destinationDirName = "./copied-public";

if (!fs.existsSync(aimDirName)) {
  console.log("Folder not exists!!!");
  console.log("Exiting...");
  process.exit(0);
}
//delete if exists
if (fs.existsSync(destinationDirName)) {
  console.log("Dir for copied exists and will be removed...");
  fs.rmSync(destinationDirName, { recursive: true, force: true });
}
fs.mkdir(destinationDirName, () => console.log("Destination dir was created."));

// copy
fs.readdir(aimDirName, (err, fileNames) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  fileNames.forEach((fileName, idx) => {
    console.log("Filenames: ", fileNames);
    const readStream = fs.createReadStream(
      path.join(__dirname, aimDirName, fileName)
    );
    const writeStream = fs.createWriteStream(
      path.join(__dirname, destinationDirName, `${idx + 1}_${fileName}`)
    );
    readStream.pipe(writeStream);

    readStream.on("end", () => console.log("Read Stream is finished."));
    writeStream.on("finish", () => console.log("Write stream finished."));
    writeStream.on("close", () => console.log("Write stream closed."));

    // const newFileName = fileName
  });
});
