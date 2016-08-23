// app.js
import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

//import schema from './graphql';

const APP_PORT = 5050;

var app = express();

// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
  //schema,
  pretty: true
})));

// Connect mongo database
mongoose.connect('mongodb://localhost/graphql');

// start server
var server = app.listen(APP_PORT, () => {
  console.log('Listening at port', server.address().port);
});
