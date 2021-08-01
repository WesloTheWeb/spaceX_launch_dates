const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();

// With graphql we have one endpoint, then we have a schema that includes any mutations.
app.use('/graphql',
    graphqlHTTP({
        schema,
        graphiql: true // Makes query to our server
    })
);

const PORT = process.env.PORT || 5000; // listening

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
