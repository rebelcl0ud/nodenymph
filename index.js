const express = require('express');

const app = express();

// serves static files, such as images, from within 'public' folder
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('hebwo... this is just a test... *beep*');
})

app.get('/who', (req, res) => {
	res.send(`
		<p>you just got routed to who page</p>
		<div>
			<img src='/images/spidergwen.jpeg'/>
		</div>
	`)
})

app.listen(3000, () => {
	console.log('app is listening...');
})