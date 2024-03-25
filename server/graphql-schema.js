import { gql } from 'apollo-server';

const graphqlSchema = gql`
  type Book {
    id: ID
    title: String
    author: String
  }

  type Query {
    books: [Book]
    book(id: ID): Book
  }
`;

export default graphqlSchema;
