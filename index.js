const express = require('express');
const app = express();
const host = 'localhost';
const port = 8080;

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, host, () => console.log(`App listening at http://${host}:${port}`));
