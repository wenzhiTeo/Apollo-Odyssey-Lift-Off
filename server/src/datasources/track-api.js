const { RESTDataSource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  getTracksList() {
    return this.get("tracks");
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }
  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }
}

module.exports = TrackAPI;
