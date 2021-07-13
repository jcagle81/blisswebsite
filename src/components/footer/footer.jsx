import React from "react";
import styled from "styled-components";
import  BrandLogo  from "../brandLogo/brandLogo";
import { deviceSize } from "../responsive/responsive";
import { useMediaQuery } from "react-responsive";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';


const FooterContainer = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #F8B8AC;
  
  padding-bottom: 0;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 12px;
  }
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1em;
  align-items: flex-start;
  font-size: 10px;
  color: #264653;
`;

const Phone = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  padding-left: 1em;
  font-size: 10px;
  color: #264653;
`;

const SocialIcon = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: #8a8a8a;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
  &:hover {
    color: #777777;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 17px;
  }
`;

const Footer =() => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <FooterContainer>
      <BrandLogo hideLogo color="#8A8A8A" textSize={isMobile ? 20 : 25} />
      <Address>Address: 3273 W Carefree Cir Suite 113, Colorado Springs, CO 80917</Address>
      <Phone>Phone: (719) 640-0507</Phone>
      <SocialIcon>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <PinterestIcon />
        <YouTubeIcon />
      </SocialIcon>
    </FooterContainer>
  );
}

export default Footer;