require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3100;
const massive = require('massive');
const c = require('./controller/controller')

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
})
    .catch(err => console.log(`Error connecting to db, ${err}`));

// Middleware
app.use( json() );
app.use( cors() );

// Endpoints
app.get(`/api/inventory`, c.inventory)

// Listening
app.listen(port, () => console.log(`Listening on port ${port}`));