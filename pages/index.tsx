import type { NextPage } from "next";
import { useDebugValue, useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { useUser } from "../firebase/useUser";
import styled from "styled-components";
import heroLogo from "../images/Hero Logo.png";
import unofficialIcon from "../images/unofficial-icon.png";
import Image from "next/image";

const Home: NextPage = () => {
  const [termList, setTermList] = useState([]);
  const [token, setToken] = useState();
  // const { user } = useUser();
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    // function checkAuth(token: Number) {
    // }

    // setToken(router.query.token);

    const fetchData = async () => {
      // console.log("user", user);
      // setUserList([fakeUser])
      // setOriginalData([fakeUser])
      setLoading(false);
      await fetch("api/getTerms", {
        method: "POST",
        headers: {},
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.length === 0) {
            setLoading(true);
          } else {
            // console.log("API RESULT", result);
            // console.log("token", result.communityToken);
            // const auth = checkAuth(result.token);
            // if (auth) {
            //   setTermList(result);
            // }
          }
        });
    };
    fetchData();
  }, []);

  const terms = [
    {
      title: "cryptocurrency",
      image: "",
      description:
        'Cryptocurrency (or "crypto") refers to a digital currency in which transactions are verified via blockchain technology, and records are maintained by a decentralized system using cryptography rather than by a centralized authority.',
    },
    {
      title: "FiaT",
      image: "",
      description:
        'Fiat (or "fiat currency") is a term used to refer to government-issued currency in which there is no commodity or asset backing it\'s underlying value. The value of fiat currency is derived fr om the word and trust of the people who use it as a medium of exchange.',
    },
  ];

  return (
    <GlobalContainer>
      <TopBar>
        <LogIn dummy>LOG IN</LogIn>
        <TopButton onClick={() => console.log("hey")}>ABOUT</TopButton>
        <TopButton onClick={() => console.log("hey")}>NFT OWNERSHIP</TopButton>
        <TopButton onClick={() => console.log("hey")}>VERIFIED LIST</TopButton>
        <LogIn>LOG IN</LogIn>
      </TopBar>
      <LogoWrapper>
        <Image
          layout={"fill"}
          objectFit={"contain"}
          src={heroLogo}
          alt="logo"
        />
      </LogoWrapper>
      <SearchTerms type="text" placeholder="Search the Metaverse..." />
      <TermsContainer>
        <TrendingText>TRENDING</TrendingText>
        {terms.map((term, index) => (
          <Term key={index}>
            <ImageContainer>
              <Image
                layout={"fill"}
                objectFit={"contain"}
                src={term.image === "" ? unofficialIcon : term.image}
                alt="Term icon"
              />
            </ImageContainer>
            <TextContainer>
              <Title>{term.title.toUpperCase()}</Title>
              <Description>{term.description}</Description>
            </TextContainer>
          </Term>
        ))}
      </TermsContainer>
    </GlobalContainer>
  );
};

export default Home;

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
`;

const TopBar = styled.div`
  height: 100px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const TopButton = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  width: 50px;
  height: 20px;
`;

const LogIn = styled.button`
  display: ${(dummy) => (dummy ? "none" : "")};
  margin-left: ${(dummy) => (dummy ? "0" : "auto")};
  margin-right: ${(dummy) => (dummy ? "auto" : "0")};
  width: 50px;
  height: 21px;
  background: linear-gradient(
    90deg,
    rgba(0, 56, 245, 1) 0%,
    rgba(0, 249, 181, 1) 100%
  );
  font-weight: bold;
`;

const LogoWrapper = styled.img`
  width: 350px;
  height: 50px;
  position: relative;
`;

const SearchTerms = styled.input`
  width: 350px;
  height: 25px;
  border: 2px solid #fff;
  border-radius: 3px;
  padding-left: 10px;
  margin: 20px 0;
`;

const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
`;

const TrendingText = styled.h1`
  font-style: underline;
  font-size: 20px;
  margin: 20px 0;
`;

const Term = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #666666;
  background-color: #141414;
  border-radius: 20px;
  height: 60px;
  padding: 0 40px;
`;

const ImageContainer = styled.div`
  border-radius: 100%;
  border: 2px solid #fff;
  height: 100%;
  width: 50px;
  height: 50px;
  position: relative;
  background-color: #000;
`;

const TextContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 18px;
`;

const Description = styled.p`
  font-size: 14px;
`;
