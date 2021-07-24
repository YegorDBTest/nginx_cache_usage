const express = require('express');
const fs = require('fs-extra');

const app = express();
const port = 8080;


app.get('/', (req, res) => {
  res.send('Hello World!1');
});


app.post('/reset_cache/', (req, res) => {
  fs.emptyDir('/cache/', err => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send('Done!');
    }
  })
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
