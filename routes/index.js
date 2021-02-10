const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res, next) => {
    res.render('index');
});

indexRouter.get('/acercaDe', (req, res, next) => {
    res.render('acercaDe/acercaDe');
});

module.exports = indexRouter;