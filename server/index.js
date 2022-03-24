const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();
const db = require('./db');

// Router
const router = require('./routes');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
