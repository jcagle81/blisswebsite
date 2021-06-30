import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Marginer } from "../marginer/marginer";
import { deviceSize } from "../responsive/responsive";
import TopSectionBackgroundIMG from '../../images/tranquil.jpg';
import Owner from '../../images/owner.jpg';

const TopSectionContainer = styled.div`
    width: '100%';
    height: 700px;
    background: url(${TopSectionBackgroundIMG});
    background-position: 0px -150px;
    background-size: cover;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 700px;
        background-position: 0px 0px;
    }
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(38, 70, 83, 0.2);
    display: flex;
    flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;



const StandoutImage = styled.div`
    display: flex;
    justify-content: center;
    width: 30em;
    height: 30em;
    padding-top: 7em;
  
    img{
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width: ${deviceSize.mobile}px) {
  align-items: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: ${deviceSize.mobile}px) {
  align-items: center;
  }
`;

const SloganText = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 60px;
  
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

const AboutText = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding-top: 1em;
  
  line-height: 1.4;
  font-weight: 500;
  font-size: 50px;
  max-height:20em;
  
    
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

const About = (props) => {
  const { children } = props;
  
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  
    return (
      <div>
        <TopSectionContainer>
          <BackgroundFilter>
            {children}
            <TopSectionInnerContainer>
              <LogoContainer>
                <Marginer direction="vertical" margin={8} />
                <Marginer direction="vertical" margin={15} />
                </LogoContainer>
              {!isMobile && (
                <StandoutImage>
                  <img src={Owner} alt="Bliss Esthetics Owner" />
                </StandoutImage>
              )}
              
            </TopSectionInnerContainer>
            <SloganText>All About Tanya</SloganText>
          </BackgroundFilter>
        </TopSectionContainer>
        <textContainer>  
          <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </AboutText>
        </textContainer>
      </div>
    );
  }

  export default About;
  
