import React from 'react'
import { gql, useQuery } from "@apollo/client";
const GET_SITE_INFO = gql`
  query GetSiteInfo {
    allSettings {
      generalSettingsTitle
      generalSettingsUrl
    }
  }
`;

function Header() {
      const { loading, error, data } = useQuery(GET_SITE_INFO);

      if (loading) return <p>loading...</p>;
      if (error) return <p>Error{error.message}</p>;

  return (
    <header>
      <a href={data.allSettings.generalSettingsUrl}>
        {data.allSettings.generalSettingsTitle}
      </a>
    </header>
  );
}

export default Header