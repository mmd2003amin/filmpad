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

export { CREATE_COMMENT };
