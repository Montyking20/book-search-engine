const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
    type Book {
        _id: ID!
        authors: [String]!
        description: String!
        bookId: String!
        image: String!
        link: String!
        title: String!
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]        
    }
    
    type Query {
        me: User
    }
    type Auth {
    token: ID!
    user: User
    }
    type SavedBookInput {
        authors: [String]
        description: String
        bookId: String
        image: String
        forSale: String
        link: String
        title: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(authors: [String]!, description: String!, bookId: String!, image: String!, title: String!): SavedBookInput
        removeBook(bookId: String!): User
}
`;

// export the typeDefs
module.exports = typeDefs;