const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
const errorhandler = require('errorhandler');
const path = require('path');

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use('/public', express.static('public'));
app.use(errorhandler());

app.use('/', indexRouter);

app.listen(process.env.PORT || 4005, console.log('servidor andando'));