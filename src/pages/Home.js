import React from "react";
import { Route } from "react-router-dom";

import Catalog from "containers/Catalog/Catalog";
import CatalogDetails from "containers/CatalogDetails/CatalogDetails";

/**
 * Represents the home page of this app.
 * It has a subrouter to display the CatalogDetails.
 * 
 * Page
 * Stateless
 * Router
 */
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
