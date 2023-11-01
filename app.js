const express = require('express');
const server = require('http').createServer();
const app = express();

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/about', function (req, res) {
  res.sendFile('about.html', { root: __dirname });
});

app.get('/styles.css', function (req, res) {
  res.sendFile('styles.css', { root: __dirname });
});

app.get('/about.jpg', function (req, res) {
  res.sendFile('about.jpg', { root: __dirname });
});

app.get('/resume.pdf', function (req, res) {
  res.sendFile('resume.pdf', { root: __dirname });
});

server.on('request', app);

server.listen(3000, function () {
  console.log('server started on port 3000');
});
