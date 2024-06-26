import { gql } from "@apollo/client";

const GET_GENRES = gql`
  query {
    genres {
      name
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

const GET_USERS = gql`
  query {
    clients {
      id
      userName
      email
      password
      number
      createdAt
      reqFilms {
        name
        type
        message
        statuss
        createdAt
        id
      }
    }
  }
`;

export { GET_GENRES, GET_FILMS, GET_COUNTRIES, GET_USERS };
