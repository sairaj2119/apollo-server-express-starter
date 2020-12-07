import { gql } from 'apollo-server-express';

export const postType = gql`
  type Post {
    title: String
  }
`;
