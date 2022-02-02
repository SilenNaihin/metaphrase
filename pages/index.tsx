import type { NextPage } from "next";
import { useDebugValue, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
// import { useUser } from "../firebase/useUser";
import styled from "styled-components";
import heroLogo from "../img/Hero Logo.png";
import unofficialIcon from "../img/unofficial_icon.png";
import Image from "next/image";
import MainTerms from "../components/MainTerms";
import metaphrase from "../img/metaphrase.svg";
import { Text, FlexRow, ButtonIcon } from "../styles/css.ts";
import trending from "../img/whatshot.svg";
import search from "../img/search.svg";

const Home: NextPage = () => {
  const [termList, setTermList] = useState([]);
  const [token, setToken] = useState();
  // const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);

  const mainContainerRef = useRef(null);

  const router = useRouter();

  // useEffect(() => {
  // function checkAuth(token: Number) {
  // }

  // setToken(router.query.token);

  //   const fetchData = async () => {
  //     console.log("user", user);
  //     setUserList([fakeUser])
  //     setOriginalData([fakeUser])
  //     setLoading(false);
  //     await fetch("api/getTerms", {
  //       method: "POST",
  //       headers: {},
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         if (result.length === 0) {
  //           setLoading(true);
  //         } else {
  //           console.log("API RESULT", result);
  //           console.log("token", result.communityToken);
  //           const auth = checkAuth(result.token);
  //           if (auth) {
  //             setTermList(result);
  //           }
  //         }
  //       });
  //   };
  //   fetchData();
  // }, []);

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
    <>
      <HeroContainer>
        <TopBar>
          <TopLeftLogo>
            <Image
              layout={"fill"}
              objectFit={"contain"}
              src={unofficialIcon}
              alt="logo"
            />
          </TopLeftLogo>
          <MiddleSection>
            <TopButton first type="button" onClick={() => console.log("hey")}>
              MISSION
            </TopButton>
            <TopButton type="button" onClick={() => console.log("hey")}>
              OWN A PHRASE
            </TopButton>
            <TopButton type="button" onClick={() => console.log("hey")}>
              SCHOLARS
            </TopButton>
          </MiddleSection>
          <Connect type="button">CONNECT</Connect>
        </TopBar>
        <MiddleHero>
          <Text>THE ENCYCLOPEDIA OF THE METAVERSE</Text>
          <FlexRow>
            <LogoWrapper>
              <Image
                layout={"fill"}
                objectFit={"contain"}
                src={unofficialIcon}
                alt="logo"
              />
            </LogoWrapper>
            <LogoWrapper>
              <Image
                layout={"fill"}
                objectFit={"contain"}
                src={metaphrase}
                alt="logo"
              />
            </LogoWrapper>
          </FlexRow>
          <FlexRow>
            {!showSearch ? (
              <HeroButton
                background={`linear-gradient(
                    156deg,
                    rgba(0, 0, 0, 1) 0%,
                    rgba(30, 34, 38, 1) 100%
                  )`}
                onClick={() => setShowSearch(true)}
              >
                <Text>SEARCH PHRASES</Text>
                <ButtonIcon>
                  <Image
                    layout={"fill"}
                    objectFit={"contain"}
                    src={search}
                    alt="logo"
                  />
                </ButtonIcon>
              </HeroButton>
            ) : (
              <SearchTerms type="text" placeholder="Search the Metaverse..." />
            )}
            <HeroButton
              backgroundColor="#375693"
              onClick={() =>
                mainContainerRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <Text>SEE TRENDING</Text>
              <ButtonIcon>
                <Image
                  layout={"fill"}
                  objectFit={"contain"}
                  src={trending}
                  alt="logo"
                />
              </ButtonIcon>
            </HeroButton>
          </FlexRow>
        </MiddleHero>
      </HeroContainer>

      <MainTerms mainContainerRef={mainContainerRef} terms={terms} />
    </>
  );
};

export default Home;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const MiddleHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 40%;
`;

const TopBar = styled.div`
  height: 80px !important;
  display: flex;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(47, 47, 47, 1) 0%,
    rgba(34, 39, 44, 1) 100%
  );
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const MiddleSection = styled.div`
  display: flex;
`;

interface FirstElement {
  first?: boolean;
}

const TopButton = styled.button`
  background-color: transparent;
  border: none;
  color: #7bffdf;
  margin-left: ${(p: FirstElement) => (p.first ? "0px" : "20px")};
  height: 25px;
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 0.5px;
  @media (min-width: 1000px) {
    width: 150px;
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

const TopLeftLogo = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  // cursor: pointer;
  margin-left: 20px;
  margin-right: auto;
`;

const Connect = styled.button`
  cursor: pointer;
  margin-left: auto;
  margin-right: 20px;
  width: 100px;
  border: none;
  height: 25px;
  background: #7bffdf;
  color: #2a3a3c;
  font-weight: bold;
  border-radius: 3px;
  font-size: 12px;
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

interface HeroButton {
  backgroundColor?: string;
  background?: string;
}

const HeroButton = styled.button<HeroButton>`
  cursor: pointer;
  width: 48%;
  background-color: ${(p) => p.backgroundColor && p.backgroundColor};
  background: ${(p) => p.background && p.background};
  -webkit-border-image: -webkit-gradient(
      linear,
      top,
      bottom,
      from(#fff),
      to(#61a4ba),
      color-stop(0.5, #fff),
      color-stop(0.5, #66cc00)
    )
    21 30 30 21 repeat repeat;
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
