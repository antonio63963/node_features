import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();

function onSome1() {
  console.log('Some 1')
}
function onSome2() {
  console.log('Some 2')
}

eventEmitter.on('some', onSome1)
eventEmitter.on('some', onSome2)

console.log(eventEmitter.getMaxListeners())
eventEmitter.setMaxListeners(25)
console.log(eventEmitter.getMaxListeners())
console.log(eventEmitter.eventNames())



setTimeout(() => eventEmitter.emit('some'), 500);