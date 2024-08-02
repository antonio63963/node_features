const express = require('express');

const some = require('./service')

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Express...')
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

console.log('Appp ', process.cwd()) // current dir cwd