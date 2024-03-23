import gql from 'graphql-tag';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';

const port = process.env.PORT || 8080;

// Define APIs using GraphQL SDL
const typeDefs = gql`
   type Query {
       sayHello(name: String!): String!
   }

   type Mutation {
       sayHello(name: String!): String!
   }
`;

// Define resolvers map for API definitions in SDL
const resolvers = {
   Query: {
       sayHello: (obj, args, context, info) => {
           return `Hello ${ args.name }!`;
       }
   },

   Mutation: {
       sayHello: (obj, args, context, info) => {
           return `Hello ${ args.name }!`;
       }
   }
};

// Configure express
const app = express();

// Build GraphQL schema based on SDL definitions and resolvers maps
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Build Apollo server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
async function startServer() {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();

// Run server
app.listen({ port }, () => {
   console.log(`Server ready at http://localhost:${ port }${ apolloServer.graphqlPath }`);
});