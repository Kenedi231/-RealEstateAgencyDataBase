const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const config = require('../config');

const databaseRouter = require('./routes/databaseRoutes');
const ratesRouter = require('./routes/rateRoutes');

const errorHandler = require('./middlewares/errorHandler');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.json({info: 'Node.js, Express and Postgres API'})
});

app.use('/', databaseRouter);
app.use('/rates', ratesRouter);

app.listen(config.port, () => {
    console.log(`App started on https://localhost:${config.port}/`)
});

app.use(errorHandler);