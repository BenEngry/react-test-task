const express = require('express');
const app = express();
var cors = require('cors');
const port = 3000;

app.use(express.json({ extended: true }));

app.use(cors());

app.use('/list', require('./controller/controller'));
app.use('/get/:id', require('./controller/controller'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})