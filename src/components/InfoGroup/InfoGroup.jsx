import React from "react";
import "./InfoGroup.scss";
import HeadingIcon from "../HeadingIcon/HeadingIcon";
import { HomeIcon } from "../../assets/data/Icons";

function InfoGroup({ title, children }) {
  return (
    <div className="information_room_detail border_radius_2rem">
      <HeadingIcon
        nameTitle={title}
        iconComponent={
          <HomeIcon sizeIcon={{ height: "32px", width: "32px" }} />
        }
      />
      {children}
    </div>
  );
}

export default InfoGroup;
