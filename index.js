const fs = require("fs");
const dns = require('dns');

function timestamp() {
  return performance.now().toFixed(2);
}

console.log("Start...");

setTimeout(() => {
  console.log("Timer#1", timestamp());
  process.nextTick(() =>
    process.nextTick(() => console.log("Next tick#1 timer#1"))
  );
}, 100);
setTimeout(() => console.log("Timer#2", timestamp()), 0);
fs.writeFile(
  "./some.txt",
  "Hello NODE.JS",
  () => console.log("File was Written", timestamp()) // callback on close
);
Promise.resolve().then(() => console.log("Promise #1", timestamp()));

process.nextTick(() => console.log("Next tick #2", timestamp()));

setImmediate(() => console.log("Immediate #1"));

dns.lookup('google.com', (err, address, family) => {
  console.log('DNS google.com: ', address, timestamp())
})
dns.lookup('localhost', (err, address, family) => {
  console.log('DNS localhost: ', address, timestamp())
  Promise.resolve().then(() => console.log('Localhost Promise...', timestamp()))
})

console.log("End...");
