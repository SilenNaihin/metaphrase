import styled from "styled-components";
import Image from "next/image";
import { FlexRow, ButtonIcon } from "../styles/css";
import search from "../img/search.svg";

interface Search {
  searchCards: string;
  setSearchCards: (value: string) => void;
  margin?: string;
}

const Search: React.FC<Search> = ({ searchCards, setSearchCards, margin }) => {
  return (
    <OuterWrapper margin={margin}>
      <SearchFlexRow
        justifyContent="space-evenly"
        alignItems="center"
        margin="40px 0 100px 0"
      >
        <SearchTerms
          type="text"
          placeholder="Search the Metaverse..."
          onChange={(e) => setSearchCards(e.target.value)}
        />
        <HeroButtonIcon
          onClick={() => console.log(searchCards)}
          width="20px"
          height="20px"
        >
          <Image
            layout={"fill"}
            objectFit={"contain"}
            src={search}
            alt="logo"
          />
        </HeroButtonIcon>
      </SearchFlexRow>
    </OuterWrapper>
  );
};

export default Search;

interface StyledWrapper {
  margin?: string;
}

const OuterWrapper = styled.div`
  margin: ${(props: StyledWrapper) => props.margin || "0"};
`;

const HeroButtonIcon = styled(ButtonIcon)`
  // color: linear-gradient(0deg, #414449, #f7f7f7);
  margin-left: 10px;
  cursor: pointer;
`;

const SearchFlexRow = styled(FlexRow)`
  border-radius: 3px;
  border: 0.5px solid #fff;
  background: linear-gradient(
    170deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(30, 34, 38, 1) 100%
  );
  padding-right: 10px;
`;

const SearchTerms = styled.input`
  width: 400px;
  height: 42px;
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
