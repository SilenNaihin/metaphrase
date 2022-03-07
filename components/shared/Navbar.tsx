import styled from "styled-components";
import unofficialIcon from "../../img/unofficial_icon.png";
import Image from "next/image";
import { useRouter } from "next/router";

interface Navbar {
  navbarHeight: string;
}

const Navbar: React.FC<Navbar> = ({ navbarHeight }) => {
  const router = useRouter();
  return (
    <TopBar navbarHeight={navbarHeight}>
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
      <Connect type="button" onClick={() => router.push("signup")}>
        LOG IN
      </Connect>
    </TopBar>
  );
};

export default Navbar;

interface TopBar {
  navbarHeight: string;
}

const TopBar = styled.div`
  height: ${(props: TopBar) => props.navbarHeight};
  position: absolute;
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
