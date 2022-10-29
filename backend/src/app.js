const express = require('express');
const app = express();
//Rotas
const index = require('./routes/index');
const ideaRoute = require('./routes/idea-routes');
app.use(express.urlencoded());
app.use(express.json());
app.use('/', index);
app.use('/idea', ideaRoute);
module.exports = app;
