import React from "react";
import styled from "styled-components";
import Footer from "../footer/footer";
import { Marginer } from "../marginer/marginer";
import { InnerPageContainer, PageContainer, } from "../pageContainer/pageContainer";
import { deviceSize } from "../responsive/responsive";
import SpecialistAd from "../HomeBanner/HomeBanner";
import TopSection from "./topSection/topSection";
import { Route } from 'react-router-dom';
import Services from './Services/Services';


const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;

const HomePage = () => {
  return (
    <Route
        exact path='/'
        render={() => (
        <PageContainer>
          <TopSection />
          <InnerPageContainer>
            <Marginer direction="vertical" margin="2em" />
            <ContentContainer>
              <Services />
            </ContentContainer>
            <Marginer direction="vertical" margin="5em" />
            <SpecialistAd />
            <Marginer direction="vertical" margin="5em" />
          </InnerPageContainer>
        </PageContainer>
        )}
    />
     
  );
}

export default HomePage;