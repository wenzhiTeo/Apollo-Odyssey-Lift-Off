const { default: axios } = require("axios");

const resolvers = {
  Query: {
    // returns array of tracks for homepage
    tracksList: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksList();
    },
    // tracksList achive via Axios
    tracksListAxios: async () => {
      const baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com";
      const res = await axios.get(`${baseURL}/tracks`);
      return res.data;
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },

  /* 
    This is link with Track type in schema.js, 
    to let apollo know the author in Track type 
    can be fetch via this function 
  */

  /* Using axios

    author: async ({ authorId }, _, { dataSources }) => {
      const baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
      const res = await axios.get(`$/{baseURL}author/${authorId}`);
      return res.data;
    },
  
  */
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
