import React from "react";
import {
  InfoBarContainer,
  LeftInnerContainer,
  RightInnerContainer,
  OnlineIcon,
} from "../styles/infobar";
import onlineIcon from "../assets/onlineIcon.png";
import closeIcon from "../assets/closeIcon.png";

const InfoBar = ({ room }) => {
  return (
    <InfoBarContainer>
      <LeftInnerContainer>
        <OnlineIcon src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </LeftInnerContainer>
      <RightInnerContainer>
        <a href="/">
          <img src={closeIcon} alt="close icon" />
        </a>
      </RightInnerContainer>
    </InfoBarContainer>
  );
};

export default InfoBar;
