import React from "react";
import "./HeadingIcon.scss";

function HeadingIcon(props) {
  const { iconComponent, nameTitle, styleClass } = props;
  return (
    <div className="heading_title_icon" style={styleClass}>
      <div className="title_icon">
        <div className="icon">{!!iconComponent && iconComponent}</div>
        <div className="title">
          <p>{nameTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default HeadingIcon;
