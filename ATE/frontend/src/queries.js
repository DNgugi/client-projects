import { gql } from "@apollo/client";
export const GET_HEADER_INFO = gql`
  query GetHeaderInfo {
    allSettings {
      generalSettingsTitle
      generalSettingsUrl
    }
    menus {
      nodes {
        name
        id
        menuItems {
          nodes {
            id
            uri
            label
          }
        }
      }
    }
  }
`;

export const GET_HOME_PAGE = gql`
  query getHome {
    pages {
      edges {
        node {
          id
          title
          isFrontPage
          content
        }
      }
    }
  }
`;
