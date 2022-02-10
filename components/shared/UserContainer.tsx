import styled from "styled-components";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { useWindowSize } from "../../utils/utils";

interface UserContainer {
  children: React.ReactNode;
}

const navbarHeight = "90px";

const UserContainer: React.FC<UserContainer> = ({ children }) => {
  const [width] = useWindowSize();
  const isDesktop = width > 800;
  return (
    <PageContainer>
      {isDesktop ? (
        <>
          <Navbar
            // session={session}
            navbarHeight={navbarHeight}
          />
          <PageContent navbarHeight={navbarHeight}>{children}</PageContent>
        </>
      ) : (
        <>
          <MobileNavbar
            navbarHeight={navbarHeight}
            // session={session}
          />
          <PageContent navbarHeight={navbarHeight}>
            {children}
          </PageContent>
        </>
      )}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

interface PageContent {
  navbarHeight: string;
}

const PageContent = styled.div`
  flex: 1;
  // padding-top: ${(p: PageContent) => p.navbarHeight};
  height: 100%;
  width: 100%;
  background-color: #13161B;
  display: block;
  overflow: auto;
`;

export default UserContainer;
