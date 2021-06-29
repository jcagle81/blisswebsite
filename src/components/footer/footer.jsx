import React from "react";
import styled from "styled-components";
import  BrandLogo  from "../brandLogo/brandLogo";
import { deviceSize } from "../responsive/responsive";
import { useMediaQuery } from "react-responsive";


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

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  
 `;




const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-right: 20%;
  }
`;



const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #000;
  font-weight: 600;
  font-size: 20px;
`;

const FLink = styled.a`
  text-decoration: none;
  color: #6f6f6f;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const SocialIcon = styled.div`
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
      <TopContainer>
        <ContentContainer>
          <Title>Information</Title>
          <FLink>Phone</FLink>
          <FLink>Address</FLink>
          <FLink>Owner</FLink>
          <FLink>News</FLink>
          
        </ContentContainer>
        <ContentContainer>
          <Title>Services</Title>
          <FLink>Face</FLink>
          <FLink>Eyes</FLink>
          <FLink>Legs</FLink>
          <FLink>Arms</FLink>
          </ContentContainer>
        <ContentContainer>
          <Title>Store</Title>
          <FLink>Your Cart</FLink>
          <FLink>Shopping</FLink>
          <FLink>Your Orders</FLink>
        </ContentContainer>
        
      </TopContainer>
    </FooterContainer>
  );
}

export default Footer;