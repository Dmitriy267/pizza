const express = require('express');
const jsonServer = require('json-server');

const app = express();

app.use('/api', jsonServer.router('data.json'));
const port = process.argv[3] || 4002;
app.listen(port, () => console.log(`Listen on port ${port}`));
