import { gql } from 'apollo-server';

const graphqlSchema = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

export default graphqlSchema;
