const express = require('express')
const app = express();
const port = 8000;

app.use(express.static('.'))

app.listen(port, () => {
  console.log(`Welcome to the bread house ${port}!`)
});