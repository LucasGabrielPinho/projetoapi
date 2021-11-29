require('dotenv').config();
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const { db }        = require('./app/database/db_connection');
const cors          = require('cors')

app.use(bodyParser.json());

app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();

})

app.listen(process.env.HOST_PORT, async () => {
    initModels();
    initRoutes();
    await db.sync();
    
})

initModels = () => {
    require('./app/database/models/User');
}

initRoutes = () => {
    require('./app/routes/userRoute');
    require('./app/routes/authRoute');
}

app.use(cors());

module.exports = { app };