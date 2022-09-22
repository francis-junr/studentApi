const express = require('express');
const routes = require('./studentRoutes');
const bodyParser = require('body-parser');
const mongoConnect = require('./utils/database').mongoConnect;



const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);

mongoConnect ();
app.listen(3000, () => console.log('server listening on port 3000'))


