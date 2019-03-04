const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('hebwo... this is just a test... *beep*');
})

app.listen(3000, () => {
	console.log('app is listening...');
})