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
      background
      double
      subtitle
      slug
      time
      country
      actors
      director
      trailer
      writer
      genres {
        name
      }
      story {
        text
      }
    }
  }
`;

const GET_COUNTRIES = gql`
  query {
    countries {
      name
    }
  }
`;

export { GET_GENRES, GET_FILMS, GET_COUNTRIES };
