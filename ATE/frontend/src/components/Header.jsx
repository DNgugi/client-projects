import React from "react";
import { useQuery } from "@apollo/client";
import { GET_HEADER_INFO } from "../queries";



function Header() {
  const { loading, error, data } = useQuery(GET_HEADER_INFO);

  if (loading) return <p>loading...</p>;
    if (error) return <p>Error{error.message}</p>;
    
  return (
    <header>
      <a href={data.allSettings.generalSettingsUrl}>
        {data.allSettings.generalSettingsTitle}
          </a>
          <nav>
              {data.menus.nodes[0].menuItems.nodes.map(item => {
                  return (
                    <li key={item.id}>
                      <a href={item.uri}>{item.label}</a>
                    </li>
                  );
              })}
          </nav>
    </header>
  );
}

export default Header;
