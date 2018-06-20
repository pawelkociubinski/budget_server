import gql from "graphql-tag";

export const typeDefs = gql`
  type Book {
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]
  }

  schema {
    query: Query
  }
`;
