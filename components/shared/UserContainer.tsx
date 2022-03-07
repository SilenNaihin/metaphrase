import styled from "styled-components";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { useWindowSize } from "../../utils/utils";
import { useRouter } from "next/router";

interface UserContainer {
  children: React.ReactNode;
}

const navbarHeight = "90px";

const UserContainer: React.FC<UserContainer> = ({ children }) => {
  const [width] = useWindowSize();
  const isDesktop = width > 800;
  const router = useRouter();

  const noNavbar = router.pathname === "/signin";

  return (
    <PageContainer>
      {noNavbar ? (
        <PageContent navbarHeight={'0px'}>{children}</PageContent>
      ) : (
        <>
          {isDesktop ? (
            <>
              <Navbar
                // session={session}
                navbarHeight={navbarHeight}
              />
              <PageContent navbarHeight={navbarHeight}>{children}</PageContent>
            </>
          ) : !isDesktop ? (
            <>
              <MobileNavbar
                navbarHeight={navbarHeight}
                // session={session}
              />
              <PageContent navbarHeight={navbarHeight}>{children}</PageContent>
            </>
          ) : null}
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
  background-color: #13161b;
  display: block;
  overflow: auto;
`;

export default UserContainer;
