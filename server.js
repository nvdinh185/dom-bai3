const express = require('express');
const app = express();
const errorHandler = require('./_helpers/error-handler');

app.use(express.static(__dirname + '/client'));

// api routes
app.use('/hoa', require('./hoa/hoa.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});