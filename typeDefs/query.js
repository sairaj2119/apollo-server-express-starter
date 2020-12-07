import { gql } from 'apollo-server-express';

export const query = gql`
  type Query {
    hello: String!
  }
`;
