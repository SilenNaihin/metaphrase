import styled from "styled-components";
import unofficialIcon from "../img/unofficial_icon.png";
import Image from "next/image";
import { FlexRow } from "../styles/css";
import trendingIcon from "../img/whatshot.svg";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { NextPage } from "next";

interface Term {
  title: string;
  image: string;
  description: string;
  trending?: boolean;
}

const Trending: NextPage = () => {
  const [searchCards, setSearchCards] = useState("");

  const terms = [
    {
      title: "cryptocurrency",
      image: "",
      description:
        'Cryptocurrency (or "crypto") refers to a digital currency in which transactions are verified via blockchain technology, and records are maintained by a decentralized system using cryptography rather than by a centralized authority.',
      trending: true,
    },
    {
      title: "FiaT",
      image: "",
      description:
        'Fiat (or "fiat currency") is a term used to refer to government-issued currency in which there is no commodity or asset backing it\'s underlying value. The value of fiat currency is derived fr om the word and trust of the people who use it as a medium of exchange.',
      trending: true,
    },
    {
      title: "FiaT",
      image: "",
      description:
        'Fiat (or "fiat currency") is a term is a term is a term is a term is a term used to refer to government-issued currency in which there is no commodity or asset backing it\'s underlying value. The value of fiat currency is derived fr om the word and trust of the people who use it as a medium of exchange.',
      trending: true,
    },
  ];

  return (
    <MainContainer>
      <TermsContainer>
        <EncText>
          THE <b>ENCYCLOPEDIA</b> OF THE <b>METAVERSE</b>
        </EncText>
        <FlexRow margin="0 0 30px 0">
          <ImageContainer>
            <Image
              layout={"fill"}
              objectFit={"contain"}
              src={trendingIcon}
              alt="Term icon"
            />
          </ImageContainer>
          <TrendingText>TRENDING</TrendingText>
        </FlexRow>
        <Search
          margin={"-30px 0"}
          setSearchCards={setSearchCards}
          searchCards={searchCards}
        />
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

export default Trending;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #13161b;
`;

const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin-top: 40px;
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 420px) {
    width: 90%;
  }
`;

const TrendingText = styled.div`
  font-size: 32px;
  margin-left: 10px;
  letter-spacing: 10px;
`;

const EncText = styled.p`
  color: white;
  background-clip: text;
  -webkit-background-clip: text;
  font-family: "Red Hat Text", sans-serif;
  font-size: 14px;
`;

const Term = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border: 0.5px solid #666666;
  background: linear-gradient(
    156deg,
    rgba(19, 21, 26, 1) 0%,
    rgba(33, 35, 37, 1) 50%,
    rgba(19, 21, 26, 1) 100%
  );
  border-radius: 5px;
  height: 200px;
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
  width: 35px;
  height: 35px;
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
