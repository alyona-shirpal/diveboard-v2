/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPersonalInfo = /* GraphQL */ `
  query GetPersonalInfo($id: ID!) {
    getPersonalInfo(id: $id) {
      id
      name
      email
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPersonalInfos = /* GraphQL */ `
  query ListPersonalInfos(
    $filter: ModelPersonalInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonalInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        image
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
