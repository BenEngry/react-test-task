const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 3000;

app.use(express.json({ extended: true }));

app.use(cors());

app.use('/list', require('./controller/controller'));
app.use('/get/:id', require('./controller/controller'));

app.listen(PORT, () => {
	console.log(`PORT : ${PORT}`);
})