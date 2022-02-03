import styled from "styled-components";
import unofficialIcon from "../img/unofficial_icon.png";
import Image from "next/image";

interface Term {
  title: string;
  image: string;
  description: string;
}

interface MainTerms {
  mainContainerRef: React.RefObject<HTMLDivElement>;
  terms: Term[];
}

const MainTerms: React.FC<MainTerms> = ({ mainContainerRef, terms }) => {
  return (
    <MainContainer ref={mainContainerRef}>
      <TermsContainer>
        <TrendingText>TRENDING</TrendingText>
        {terms.map((term: Term, index: number) => (
          <Term key={index}>
            <OuterImageContainer>
              <ImageCircle>
                <ImageContainer>
                  <Image
                    layout={"fill"}
                    objectFit={"contain"}
                    src={term.image === "" ? unofficialIcon : term.image}
                    alt="Term icon"
                  />
                </ImageContainer>
              </ImageCircle>
            </OuterImageContainer>
            <TextContainer>
              <Title>{term.title.toUpperCase()}</Title>
              <Description>{term.description}</Description>
            </TextContainer>
          </Term>
        ))}
      </TermsContainer>
    </MainContainer>
  );
};

export default MainTerms;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;

const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 420px) {
    width: 90%;
  }
`;

const TrendingText = styled.div`
  text-decoration: underline;
  font-size: 22px;
  margin: 20px 0;
`;

const Term = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border: 1px solid #666666;
  background-color: #141414;
  border-radius: 35px;
  height: 110px;
  padding: 0px 40px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    height: 100px;
  }
  @media (max-width: 420px) {
    padding: 0px 10px;
  }
`;

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
`;

const OuterImageContainer = styled.div`
  width: 110px;
  @media (max-width: 600px) {
    width: 100px;
  }
`;

const ImageCircle = styled.div`
  border-radius: 100%;
  border: 2px solid #fff;
  width: 110px;
  height: 110px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

const TextContainer = styled.div`
  margin-left: 20px;
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 18px;
`;

const Description = styled.p`
  margin-top: 0px;
  font-size: 12px;
  color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  visibility: visible;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
  @media (max-width: 600px) {
    -webkit-line-clamp: 3;
  }
`;
