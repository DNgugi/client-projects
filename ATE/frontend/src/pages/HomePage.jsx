import React from "react";
import Header from "../components/Header";
import { GET_HOME_PAGE } from "../queries";
import { useQuery } from "@apollo/client";

function HomePage() {
  const { loading, error, data } = useQuery(GET_HOME_PAGE);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error{error.message}</p>;
  const home = data.pages.edges.filter(
    (item) => item.node.isFrontPage === true
  );

  return (
    <>
      <Header />
      {console.log(home[0].node.content)}
      {
        <div
          dangerouslySetInnerHTML={{
            __html: home[0].node.content
          }}
        />
      }
    </>
  );
}

export default HomePage;
