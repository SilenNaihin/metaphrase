import type { NextPage } from "next";
import { useDebugValue, useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { useUser } from "../firebase/useUser";
import styled from "styled-components";
import heroLogo from "../img/Hero Logo.png";
import unofficialIcon from "../img/unofficial_icon.png";
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
    {
      title: "FiaT",
      image: "",
      description:
        'Fiat (or "fiat currency") is a term is a term is a term is a term is a term used to refer to government-issued currency in which there is no commodity or asset backing it\'s underlying value. The value of fiat currency is derived fr om the word and trust of the people who use it as a medium of exchange.',
    },
  ];

  return (
    <GlobalContainer>
      <TopBar>
        <LogIn dummy>LOG IN</LogIn>
        <TopButton type="button" onClick={() => console.log("hey")}>
          ABOUT
        </TopButton>
        <TopButton type="button" onClick={() => console.log("hey")}>
          NFT OWNERSHIP
        </TopButton>
        <TopButton type="button" onClick={() => console.log("hey")}>
          VERIFIED LIST
        </TopButton>
        <LogIn type="button">LOG IN</LogIn>
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
    </GlobalContainer>
  );
};

export default Home;

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  align-items: center;
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
  padding-top: 5px;
  padding-bottom: 5px;
  color: #fff;
  margin-right: 15px;
  width: 175px;
  height: 25px;
  font-size: 12px;
  cursor: pointer;
`;

interface LogIn {
  dummy?: boolean;
}

const LogIn = styled.button`
  cursor: pointer;
  margin-left: ${(p: LogIn) => (p.dummy ? "20px" : "auto")};
  margin-right: ${(p: LogIn) => (p.dummy ? "auto" : "20px")};
  width: 120px;
  border: none;
  height: 21px;
  background: ${(p: LogIn) =>
    p.dummy
      ? "transparent"
      : `linear-gradient(
    90deg,
    rgba(0, 56, 245, 1) 0%,
    rgba(0, 249, 181, 1) 100%
  )`};
  font-weight: bold;
  font-size: 12px;
`;

const LogoWrapper = styled.div`
  width: 450px;
  height: 100px;
  position: relative;
`;

const SearchTerms = styled.input`
  width: 450px;
  height: 30px;
  border: 2px solid #fff;
  border-radius: 3px;
  padding-left: 10px;
  margin-bottom: 20px;
  margin-top: 35px;
  background-color: black;
  &::placeholder {
    color: #fff;
    font-family: "Roboto Mono", monospace;
  }
`;

const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
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
  height: 100px;
  padding: 0px 40px;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
`;

const OuterImageContainer = styled.div`
  width: 100px;
`;

const ImageCircle = styled.div`
  border-radius: 100%;
  border: 2px solid #fff;
  width: 100px;
  height: 100px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
