// typeDefs.js

const gql = require("graphql-tag");

const typeDefs = gql`

  scalar Date

  type Query {
    posts(order: String): [Post]!
    postById(id: ID!): Post

    comments: [Comment]!
    commentByPostId(postId: ID!): [Comment]!

  }

  type Post {

    _id: ID!
    title: String!
    author: String!
    link: String
    createdAt: Date!

  }

  type Comment {

    _id: ID!
    content: String!
    author: String!
    postId: ID!
    createdAt: Date!

  }

  type Mutation {

    createPost(title: String!, author: String!, link: String!): Post
    deletePost(id: ID!): ID

    createComment(content: String!, author: String!, postId: String!): Comment

  }
`;

module.exports = { typeDefs };
