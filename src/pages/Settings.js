import React from "react";
import { Link } from "react-router-dom";

import NationalitiesSettings from "containers/NationalitiesSettings/NationalitiesSettings";

import Header from "components/Header/Header";
import Icon from "components/Icon/Icon";

const Settings = () => {
  const BackButton = (
    <Link to="/">
      <Icon name="chevron-left" size={24} />
    </Link>
  );

  return (
    <div className="Settings">
      <Header leftContent={BackButton}>Settings</Header>
      <main className="container">
        <NationalitiesSettings />
      </main>
    </div>
  );
};

export default Settings;
