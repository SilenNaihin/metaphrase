import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <GlobalContainer>
      <TopBar>
        <AboutButton>ABOUT</AboutButton>
        <OwnershipButton>NFT OWNERSHIP</OwnershipButton>
        <VerifiedButton>VERIFIED LIST</VerifiedButton>
        <LogIn>LOG IN</LogIn>
      </TopBar>
      <Logo />
      <SearchTerms type="text" placeholder="Search the Metaverse..." />
      <TermsContainer>
        <TrendingText>Trending</TrendingText>
        {terms.map((term, index) => (
          <Term key={index}>
            <ImageContainer>
              <TermImage src={term.image}></TermImage>
              <TextContainer>
                <Title>{term.title}</Title>
                <Description>{term.description}</Description>
              </TextContainer>
            </ImageContainer>
          </Term>
        ))}
      </TermsContainer>
    </GlobalContainer>
  );
};

export default Home;
