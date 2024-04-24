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

export { CREATE_COMMENT, CREATE_USER };
