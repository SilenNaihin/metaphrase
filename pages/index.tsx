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
        <MiddleSection>
          <TopButton first type="button" onClick={() => console.log("hey")}>
            ABOUT
          </TopButton>
          <TopButton type="button" onClick={() => console.log("hey")}>
            NFT OWNERSHIP
          </TopButton>
          <TopButton type="button" onClick={() => console.log("hey")}>
            VERIFIED LIST
          </TopButton>
        </MiddleSection>
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
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  align-items: center;
`;

const MiddleSection = styled.div`
  display: flex;
`;

interface FirstElement {
  first?: boolean;
}

const TopButton = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #fff;
  margin-left: ${(p: FirstElement) => (p.first ? "0px" : "20px")};
  height: 25px;
  font-size: 12px;
  cursor: pointer;
  @media (min-width: 1000px) {
    width: 175px;
  }
  @media (max-width: 1000px) {
    margin-left: ${(p: FirstElement) => (p.first ? "20px" : "20px")};
  }
  @media (max-width: 768px) {
    margin-left: ${(p: FirstElement) => (p.first ? "0" : "20px")};
  }
  @media (max-width: 600px) {
    width: 125px;
  }
  @media (max-width: 420px) {
    width: 33%;
    margin-left: ${(p: FirstElement) => (p.first ? "0" : "10px")};
    height: 40px;
  }
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
  @media (max-width: 1000px) {
    display: ${(p: LogIn) => (p.dummy ? "none" : "")};
  }
  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
  }
  @media (max-width: 420px) {
    width: 30%;
  }
`;

const LogoWrapper = styled.div`
  width: 450px;
  height: 100px;
  position: relative;
  @media (max-width: 600px) {
    width: 90%;
  }
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
  color: #fff;
  font-family: "Roboto Mono", monospace;
  @media (max-width: 600px) {
    width: 90%;
  }
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
