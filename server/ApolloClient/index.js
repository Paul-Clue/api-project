import gql from 'graphql-tag';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import graphqlSchema from '../graphql-schema.js';
// import booksResolver from '../resolvers/booksResolver.js'
import booksResolver from '../resolvers/booksResolver/booksResolver.js'
// import { makeExecutableSchema } from '@graphql-tools/schema';
// import {
//   GraphQLDate,
//   GraphQLDateTime,
//   GraphQLTime
// } from 'graphql-iso-date';
// const graphqlSchema = require('../graphql-schema');
// const gql = require('graphql-tag');
// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const { makeExecutableSchema } = require('@graphql-tools/schema');
// const {
//   GraphQLDate,
//   GraphQLDateTime,
//   GraphQLTime
// } = require('graphql-iso-date');
// const graphqlSchema = require('../graphql-schema');

const port = process.env.PORT || 8080;

// Define APIs using GraphQL SDL
// const typeDefs = gql`
//   scalar Date
//   scalar Time
//   scalar DateTime

//   type Query {
//     sayHello(name: String!): String!
//   }

//   type Mutation {
//     sayHello(name: String!): String!
//   }
// `;
// const books = [
//   {
//     title: 'The Awakening',
//     author: 'Kate Chopin',
//   },
//   {
//     title: 'City of Glass',
//     author: 'Paul Auster',
//   },
// ];

// Define resolvers map for API definitions in SDL
// const resolvers = {
//   // Date: GraphQLDate,
//   // Time: GraphQLTime,
//   // DateTime: GraphQLDateTime,
//   Query: {
//     books: () => books,
//   },

//   // Query: {
//   //   books: (obj, args, context, info) => `Hello ${args.name}!`
//   // },

//   // Mutation: {
//   //   sayHello: (obj, args, context, info) => `Hello ${args.name}!`
//   // }
// };

// Configure express
const app = express();

// Build GraphQL schema based on SDL definitions and resolvers maps
// const schema = makeExecutableSchema({ typeDefs, resolvers });

// Build Apollo server
const apolloServer = new ApolloServer({
  typeDefs: graphqlSchema,
  resolvers: booksResolver,
  introspection: true
});
async function startServer() {
  await apolloServer.start();
//   context: ({ req, res }) => {
//     const context = {};

//     // Verify jwt token
//     const parts = req.headers.authorization ? req.headers.authorization.split(' ') : [''];
//     const token = parts.length === 2 && parts[0].toLowerCase() === 'bearer' ? parts[1] : undefined;
//     context.authUser = token ? verify(token) : undefined;

//     return context;
// }
  apolloServer.applyMiddleware({ app });
}
startServer();

// Run server
app.listen({ port }, () => {
  console.log(
    `Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
  );
});
