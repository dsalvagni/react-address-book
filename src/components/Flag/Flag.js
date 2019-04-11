import React from "react";

import Config from "config";

const Flag = ({ nationality, className }) => {
  const selected = Config.nationalities.find(
    n => n.key === (nationality && nationality.toLowerCase())
  );
  if (!selected) return null;
  return <span className={className}>{selected.flag}</span>;
};

export default Flag;
