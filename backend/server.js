const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const config = require('../config');

const ratesRouter = require('./routes/rateRoutes');
const photoRouter = require('./routes/photoRoutes');
const photoCatalogRouter = require('./routes/photoCatalogRoutes');
const userDataRouter = require('./routes/userDataRoutes');
const ownerEmployerRouter = require('./routes/ownerEmployerRoutes');
const agentRouter = require('./routes/agentRoutes');
const userRouter = require('./routes/userRoutes');
const apartmentRouter = require('./routes/apartmentRoutes');
const contractWithAgencyRouter = require('./routes/contractWithAgencyRoutes');
const contractRouter = require('./routes/contractRoutes');

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

app.use('/rates', ratesRouter);
app.use('/photos', photoRouter);
app.use('/photo-catalog', photoCatalogRouter);
app.use('/user-data', userDataRouter);
app.use('/owner', ownerEmployerRouter);
app.use('/employer', ownerEmployerRouter);
app.use('/agents', agentRouter);
app.use('/users', userRouter);
app.use('/apartments', apartmentRouter);
app.use('/contract-with-agency', contractWithAgencyRouter);
app.use('/contract', contractRouter);

app.listen(config.port, () => {
    console.log(`App started on https://localhost:${config.port}/`)
});

app.use(errorHandler);