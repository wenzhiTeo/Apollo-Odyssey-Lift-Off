const { gql } = require("apollo-server");

const typeDefs = gql`
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }

  "Part 3 Added for display details of Track"
  type Module {
    id: ID!
    title: String!
    length: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    tracksList: [Track!]!
    tracksListAxios: [Track!]!
    track(id: ID!): Track
  }
`;

module.exports = typeDefs;
