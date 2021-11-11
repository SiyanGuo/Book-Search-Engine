// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount:String
  }

type Book {
    authors: [String]
    description: String
    bookId: ID
    title: String
    image:String
    link:String
  }

  input BookInput{
    authors: [String]
    description: String
    bookId: ID!
    title: String
    image:String
    link:String
  }

type Auth {
    token: ID!
    user: User
  }

type Query {
  me: User
  users: [User]
  user(username: String!): User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData:BookInput!): User
    removeBook(bookId: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;