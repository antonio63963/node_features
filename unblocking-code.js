const fs = require("fs");


let isRuning = true;

setTimeout(() => (isRuning = false), 0);

process.nextTick(() => console.log("Next TICK"))

function setPromise() {
  return new Promise((res, rej) =>
    setImmediate(() => {
      console.log("Ha!....", isRuning);
      res();
    })
  );
}

async function whileLoop() {
  while (isRuning) {
    console.log("while...");
    // await fun();
    await setPromise();
  }
}

whileLoop().then(() => {
  console.log("WHILE LOOP IS ENDED>>>>");
  console.log(performance.now().toFixed(2));
});
