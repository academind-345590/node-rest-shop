const express = require('express');
const app = express();

const productRouter = require('./api/routes/products');

app.use((req, res, next) => {
  res.status(200).json({
    message: 'It works!'
  });
});

module.exports = app;