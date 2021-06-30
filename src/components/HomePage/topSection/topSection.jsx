import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import  BrandLogo  from "../../brandLogo/brandLogo";
import Button from "../../Button/Button";
import { Marginer } from "../../marginer/marginer";
import { deviceSize } from "../../responsive/responsive";

import TopSectionBackgroundIMG from '../../../images/sensual.jpg';
import Salon from '../../../images/salon.jpg';

const TopSectionContainer = styled.div`
    width: 100%;
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
    background-color: rgba(38, 70, 83, 0.8);
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
    width: 22em;
    height: 22em;
    
    img{
        width: 100%;
        height: 100%;
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

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 500;
  font-size: 35px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
  }
`;

const TopSection = (props) => {
  const { children } = props;
  
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  
    return (
      <TopSectionContainer>
        <BackgroundFilter>
          {children}
          <TopSectionInnerContainer>
            <LogoContainer>
              <BrandLogo
                logoSize={isMobile ? 40 : 65}
                textSize={isMobile ? 35 : 55}
              />
              <Marginer direction="vertical" margin={8} />
              <SloganText>Show Your Inner Beauty To The World</SloganText>
              <Marginer direction="vertical" margin={15} />
              <a href="https://square.site/book/A525MVMSYAYVK/bliss-esthetics-colo-spgs-co"><Button>Book now</Button></a>
            </LogoContainer>
            {!isMobile && (
              <StandoutImage>
                <img src={Salon} alt="Bliss Esthetics Owner" />
              </StandoutImage>
            )}
          </TopSectionInnerContainer>
        </BackgroundFilter>
      </TopSectionContainer>
    );
  }
  export default TopSection;