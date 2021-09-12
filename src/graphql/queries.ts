/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMusic = /* GraphQL */ `
  query GetMusic($id: ID!) {
    getMusic(id: $id) {
      id
      title
      signer
      duration
      isPlaying
      createdAt
      updatedAt
    }
  }
`;
export const listMusic = /* GraphQL */ `
  query ListMusic(
    $filter: ModelMusicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMusic(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        signer
        duration
        isPlaying
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
