import React from "react";
import { Layout, QueryResult } from "../components";
import { gql, useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";

const TRACKS = gql`
  query getTracks {
    tracksList {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { error, loading, data } = useQuery(TRACKS);
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksList?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
