// const math = require("./math")
// console.log(math);
// console.log("Math Value is", math.sub(2, 4));
// console.log("Math Value is", math.sum(2, 4));


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Prithwi Singh!')
});

app.listen(port);