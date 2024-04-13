import { gql } from "@apollo/client";

const GET_GENRES = gql`
  query {
    genres {
      name
    }
  }
`;

const GET_FILMS = gql`
  query {
    films {
      poster
      imdbScore
      title
      production
      story {
        text
      }
    }
  }
`;

export { GET_GENRES , GET_FILMS};
