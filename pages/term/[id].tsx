import styled from "styled-components";
import { useRouter } from "../router";

const MainTerms: React.FC<MainTerms> = ({ mainContainerRef, terms }) => {

    const router = useRouter();
    const id = router.query

  return (
    <MainContainer ref={mainContainerRef}>

    </MainContainer>
  );
};

export default MainTerms;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;