import { gql } from '@apollo/client';

export const CREATOR_LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`

export const CREATE_PROJECT = gql`
mutation createProject($title: title, $authors: authors, $description: description, $techUsed: techUsed, $dateCreated: dateCreated, $github: github, $depolyedLink: depolyedLink) {
    createProject(title: $title, authors: $authors, description: $description, techUsed: $techUsed, dateCreated: $dateCreated, github: $github, depolyedLink: $depolyedLink) {
        project {
            _id
        }
    }
}
`

export const UPDATE_PROJECT = gql`
mutation updateProject($title: title, $authors: authors, $description: description, $techUsed: techUsed, $dateCreated: dateCreated, $github: github, $depolyedLink: depolyedLink) {
    updateProject(title: $title, authors: $authors, description: $description, techUsed: $techUsed, dateCreated: $dateCreated, github: $github, depolyedLink: $depolyedLink) {
        project {
            _id
        }
    }
}
`;