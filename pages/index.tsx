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
// @ts-ignore
import { Text, FlexRow, ButtonIcon } from "../styles/css.ts";
import trending from "../img/whatshot.svg";
import searchIcon from "../img/search.svg";
import downChevron from "../img/chevron_down.svg";
import Search from "../components/Search";

const Home: NextPage = () => {
  const [termList, setTermList] = useState([]);
  const [token, setToken] = useState();
  // const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchCards, setSearchCards] = useState("");
  const [searchCond, setSearchCond] = useState("trending");

  const mainContainerRef = useRef(null);

  const router = useRouter();

  // useEffect(() => {
  // function checkAuth(token: Number) {
  // }

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
        <BottomSection>
          <MiddleHero>
            <EncText>THE ENCYCLOPEDIA OF THE METAVERSE</EncText>
            <FlexRow>
              <LogoWrapper>
                <Image
                  layout={"fill"}
                  objectFit={"contain"}
                  src={unofficialIcon}
                  alt="logo"
                />
              </LogoWrapper>
              <LogoText>METAPHRASE</LogoText>
            </FlexRow>

            {!showSearch ? (
              <FlexRow
                justifyContent="space-evenly"
                alignItems="center"
                fullWidth
                margin="40px 0 100px 0"
              >
                <HeroButton
                  background={`linear-gradient(
                    156deg,
                    rgba(0, 0, 0, 1) 0%,
                    rgba(30, 34, 38, 1) 100%
                  )`}
                  onClick={() => setShowSearch(true)}
                >
                  <ButtonText color="transparent" size="14px">
                    SEARCH PHRASES
                  </ButtonText>
                  <HeroButtonIcon width="20px" height="20px">
                    <Image
                      layout={"fill"}
                      objectFit={"contain"}
                      src={searchIcon}
                      alt="logo"
                    />
                  </HeroButtonIcon>
                </HeroButton>
                <HeroButton
                  backgroundColor="#375693"
                  onClick={() =>
                    // @ts-ignore
                    mainContainerRef.current.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  <CustomText color="transparent" size="14px">
                    SEE TRENDING
                  </CustomText>
                  <HeroButtonIcon width="16px" height="16px">
                    <Image
                      layout={"fill"}
                      objectFit={"contain"}
                      src={trending}
                      alt="logo"
                    />
                  </HeroButtonIcon>
                </HeroButton>
              </FlexRow>
            ) : (
              <Search
                setSearchCards={setSearchCards}
                searchCards={searchCards}
              />
            )}

            <BrowseLib>
              <Text spacing="3px" color="#78797B" size="14px">
                BROWSE LIBRARY
              </Text>
              <ChevronWrapper
                onClick={() =>
                  // @ts-ignore
                  mainContainerRef.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                <ButtonIcon width="18px" height="18px" margin="2px 0 0 0">
                  <Image
                    layout={"fill"}
                    objectFit={"contain"}
                    src={downChevron}
                    alt="logo"
                  />
                </ButtonIcon>
              </ChevronWrapper>
            </BrowseLib>
          </MiddleHero>
        </BottomSection>
      </HeroContainer>

      <MainTerms
        mainContainerRef={mainContainerRef}
        terms={terms}
        setSearchCards={setSearchCards}
        searchCards={searchCards}
        searchCond={searchCond}
        setSearchCond={setSearchCond}
      />
    </>
  );
};

export default Home;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const TopBar = styled.div`
  height: 90px !important;
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
`;

const EncText = styled.p`
  background: linear-gradient(0deg, #414449, #f7f7f7);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-family: "Red Hat Text", sans-serif;
  font-size: 12px;
  margin-bottom: -16px;
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
  width: 80px;
  border: none;
  height: 25px;
  background: #7bffdf;
  color: #2a3a3c;
  font-weight: 600;
  border-radius: 3px;
  font-size: 12px;
`;

const LogoWrapper = styled.div`
  width: 55px;
  height: 55px;
  position: relative;
`;

interface HeroButton {
  backgroundColor?: string;
  background?: string;
}

const HeroButton = styled.button<HeroButton>`
  cursor: pointer;
  height: 50px;
  width: 45%;
  background-color: ${(p) => p.backgroundColor && p.backgroundColor};
  background: ${(p) => p.background && p.background};
  outline: none;
  border: 1px solid #fff;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  // &::before {
  //   -webkit-border-image: -webkit-gradient(
  //       linear,
  //       top,
  //       bottom,
  //       from(#fff),
  //       to(#61a4ba),
  //       color-stop(0.5, #fff),
  //       color-stop(0.5, #66cc00)
  //     )
  //     21 30 30 21 repeat repeat;
  // }
`;

const HeroButtonIcon = styled(ButtonIcon)`
  // color: linear-gradient(0deg, #414449, #f7f7f7);
  margin-left: 10px;
  cursor: pointer;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const MiddleHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 35%;
  margin-top: 42px;
`;

const LogoText = styled.h1`
  background: linear-gradient(0deg, #969696, #fff);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-family: "Red Hat Text", sans-serif;
  font-size: 48px;
  margin-left: 20px;
  font-weight: normal;
  letter-spacing: 10px;
  // margin-bottom: -4px;
`;

const BrowseLib = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(Text)`
  background: linear-gradient(0deg, #414449, #f7f7f7);
  background-clip: text;
  -webkit-background-clip: text;
`;

const CustomText = styled(Text)`
  background: linear-gradient(0deg, #63cfb5, #7bffdf);
  background-clip: text;
  -webkit-background-clip: text;
`;

const ChevronWrapper = styled.div`
  border-radius: 100%;
  border: 1px solid #fff;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SearchFlexRow = styled(FlexRow)`
  border-radius: 3px;
  border: 1px solid #fff;
  background: linear-gradient(
    170deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(30, 34, 38, 1) 100%
  );
  padding-right: 10px;
`;

const SearchTerms = styled.input`
  width: 400px;
  height: 40px;
  border: none;
  padding-left: 10px;
  font-size: 16px;
  outline: none;
  background-color: transparent;
  &::placeholder {
    color: #78797b;
  }
  color: #78797b;
  font-family: "Red Hat Text", sans-serif;
`;
