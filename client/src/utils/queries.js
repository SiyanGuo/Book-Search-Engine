import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      username
      email
      savedBooks {
        authors
        description
        title
        bookId
        image
        link
      }
    }
  }
`;

