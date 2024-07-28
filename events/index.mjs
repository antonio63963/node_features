import Event, {EventEmitter} from 'events';

const myEvent = new Event();

myEvent.on('some', (text) => console.log('HOHOHO!!! ', text))

myEvent.emit('some', 'wowow!!!')

////// тоже самое

const myEmiter = new EventEmitter();

const onTimeout = () => console.log('Timeout!!!');
myEmiter.on('timeout', onTimeout);


setTimeout(() => myEmiter.emit('timeout'), 2000)
setTimeout(() => myEmiter.emit('timeout'), 1000)
console.log('///////||||\\\\\\\/');

/////// ONCE

myEmiter.once('once', () => console.log('ONCE EVENT OCCURED...'))
setTimeout(() => myEmiter.emit('once'), 50)
setTimeout(() => myEmiter.emit('once'), 100)

///// Remove listener

setTimeout(() => myEmiter.off('timeout', onTimeout), 5000)
setTimeout(() => {
  console.log('Try out to emit timeout event');
  myEmiter.emit('timeout', onTimeout)
}, 5500)



