const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(indexRoutes);
app.use(usersRoutes);

app.listen(3000);