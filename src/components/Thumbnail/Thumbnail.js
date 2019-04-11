import React from "react";

import styles from "./Thumbnail.module.scss";

const Thumbnail = ({ size, url, className } = { size: "128px" }) => {
  const cssClass = [styles.thumbnail];
  if(className)
    cssClass.push(className);

  if (!url) return null;

  return (
    <div className={cssClass.join(" ")} style={{ maxWidth: size }}>
      <img src={url} alt="profile thumbnail"/>
    </div>
  );
};

export default Thumbnail;
