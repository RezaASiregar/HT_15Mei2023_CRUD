const express = require('express');
const multer = require('multer');

const crud = require('../controller/crud');

const app = express.Router();
app.get('/', function (req, res) {
  res.send({ message: 'Aplikasi Swalayan' });
});

app.get('/produk', crud.fetch);
app.get('/produk/show', crud.show);
app.post('/produk/create', crud.create);
app.put('/produk/update', crud.update);
app.delete('/produk/delete', crud.destroy);

module.exports = app;

