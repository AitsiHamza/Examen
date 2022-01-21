const express = require('express');
const app = express();
const router = require('./routes/router');

// set router
app.use(router);

app.listen(8000, function() {
  console.log('app running on port 8000');
});