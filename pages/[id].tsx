import styled from "styled-components";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FlexRow } from "../styles/css";
import Image from "next/image";
import unofficialIcon from "../img/unofficial_icon.png";

const MainTerms: React.FC = () => {
  const router = useRouter();
  const id = router.query;
  const [terms, setTerms] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(false);

  // if it exists, then pull the data, otherwise offer to create a new one

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://localhost:8080/posts/${id}`, {
        method: "GET",
      })
        .then((res) => {
          res.json();
        })
        .then((res) => {
          console.log(res);
          // setTerms(res);
          setIsLoaded(true);
        })
        .catch((err) => {
          setIsLoaded(true);
          setError(true);
        });
    };
    fetchData();
  }, [id]);

  return (
    <MainContainer>
      {error ? (
        <NewTerm>
          <CreateButton onClick={() => router.push('new')} >Create New Term</CreateButton>
        </NewTerm>
      ) : (
        <TermContainer>oldone</TermContainer>
      )}
    </MainContainer>
  );
};

export default MainTerms;

const TermContainer = styled.div``;

const NewTerm = styled.div``;

const CreateButton = styled.button``;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;
