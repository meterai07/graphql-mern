require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const colors = require('colors');
const connectDB = require('./config/db');

connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}));

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});