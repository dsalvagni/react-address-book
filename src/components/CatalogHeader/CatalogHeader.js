import React from "react";
import { Link } from "react-router-dom";

import Search from "./Search/Search";
import Icon from "components/Icon/Icon";
import Header from "components/Header/Header";

/**
 * Wrapper for the users' catalog header.
 * It renders both the search input and the settings link.
 * Stateless
 */
const CatalogHeader = () => {
  const SettingsLink = (
    <Link to="/settings">
      <Icon name="settings" size={24} />
    </Link>
  );

  return (
    <Header rightContent={SettingsLink}>
      <Search />
    </Header>
  );
};

export default CatalogHeader;
