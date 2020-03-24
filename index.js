const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World'});
})

app.listen(3333);
