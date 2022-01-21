const express = require('express');
const app = express();
const router = require('./routes/router');
var cors = require('cors')


var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
// set router
app.use(router);




app.listen(8000, function() {
  console.log('app running on port 8000');
});