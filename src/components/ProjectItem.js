import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id,description,link }) {
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  const onClickUrl = (url) => {
    return () => openInNewTab(url)
  }
  return (
    <div
      className="projectItem"
      onClick={onClickUrl(link)}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />

      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default ProjectItem;
