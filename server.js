const express = require('express');
const graphqlHTTP = require('express-graphql');
const dupa =  require('./dupa');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: dupa.schema,
    graphiql: true
}));

app.listen(4000);