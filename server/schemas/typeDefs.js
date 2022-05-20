const { gql } = require('apollo-server-express');
// change Project/techused if changed to options rather than string

const typeDefs = gql`
  type Project {
      title: String
      authors: String
      description: String
      techUsed: String
      dateCreated: String
      github: String
      depolyedLink: String
  }

  type User {
      _id: ID
      userName: String
      email: String
      password: String
  }

  type Query {
      users: [User]
      project(_id: String): Project
      projects: [Project]
    }

    type Mutation {
      login(email: String!, password: String!): Auth
      createProject(title: String!, authors: String!, description: String!, techUsed: String!, dateCreated: String!, github: String!, depolyedLink: String!): Project
      updateProject(id: String!, title: String!, authors: String!, description: String!, techUsed: String!, dateCreated: String!, github: String!, depolyedLink: String!): Project
    }

  `
module.exports = typeDefs;