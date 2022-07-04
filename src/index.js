const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const TrackAPI = require("./datasources/track-api");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
});

async function startApolloServer(server) {
  const { url, port } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`Sever is runing on http://localhost:${port}`);
}

startApolloServer(server);
