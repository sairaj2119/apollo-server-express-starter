import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import typeDefs from './typeDefs/index.js';
import resolvers from './resolvers/index.js';

// Construct a schema, using GraphQL schema language

// Provide resolver functions for your schema fields

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
