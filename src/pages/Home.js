import React from "react";
import { Route } from "react-router-dom";

import Catalog from "containers/Catalog/Catalog";
import CatalogDetails from "containers/CatalogDetails/CatalogDetails";

const Home = props => {
  const isDetails = props.match.path === "/details/:username?";
  return (
    <div className="home">
      <Route path="/details/:username" component={CatalogDetails} />
      <Catalog isCompact={isDetails} />
    </div>
  );
};

export default Home;
