import { gql } from "@apollo/client";

const CREATE_COMMENT = gql`
  mutation create(
    $name: String!
    $email: String!
    $text: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        text: $text
        film: { connect: { slug: $slug } }
      }
    ) {
      name
      email
      text
    }
  }
`;

const CREATE_USER = gql`
  mutation createBy(
    $userName: String!
    $email: String!
    $number: String!
    $password: String!
  ) {
    createClient(
      data: {
        userName: $userName
        email: $email
        password: $password
        number: $number
      }
    ) {
      email
      userName
      number
      password
    }
  }
`;

const REQUEST_FILM = gql`
  mutation reqFilm($name: String! $type: String! $id:ID) {
    createReqFilm(
      data: {
        name: $name
        type: $type
        message: "پیغامی نیست"
        statuss: "در حال برسی"
        client: { connect: { id: $id } }
      }
    ) {
      name
    }
  }
`;

export { CREATE_COMMENT, CREATE_USER, REQUEST_FILM };
