import styled from "styled-components";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { FlexRow } from "../styles/css";
import Image from "next/image";
import unofficialIcon from "../img/unofficial_icon.png";

interface SignIn {}

const SignIn: React.FC<SignIn> = ({}) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSignUp = async () => {
    if (password.length < 5) {
      setError("Password must be at least 4 characters");
    } else if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setError("Enter a valid email");
    } else {
      setError("");
      // const res = await fetch("http://localhost:8080/auth/whitelist_email", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     email: email,
      //   }),
      // })
      //   .then((res) => res.json())
      //   .catch((error) => console.log(error));
      await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => {
          if (res.ok) {
            res.json();
          } else {
            setError("User already exists");
          }
        })
        .then(() => {
          router.push("/terms");
          // setUser();
        }).catch((error) => console.log(error));
    }
  };

  const handleLogIn = async () => {
    if (password.length < 5) {
      setError("Password must be at least 4 characters");
    } else if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setError("Enter a valid email");
    } else {
      setError("");
      await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => {
          if (res.ok) {
            res.json();
          }
        })
        .then((res) => {
          router.push("/terms");
          console.log(res);
          // setUser();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <SignInContainer>
      <FlexRow margin="0 0 25px 0">
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
      <SignInWrapper>
        <SignInInputs
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SignInInputs
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FlexRow fullWidth>
          <SignInButton type="submit" onClick={() => handleLogIn()}>
            Log In
          </SignInButton>
          <SignInButton type="submit" onClick={() => handleSignUp()}>
            Sign Up
          </SignInButton>
        </FlexRow>
        <ErrorMessage>{error}</ErrorMessage>
      </SignInWrapper>
    </SignInContainer>
  );
};

export default SignIn;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -5px;
`;

const SignInInputs = styled.input`
  height: 30px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 5px;
  padding-left: 10px;
  width: 100%;
  margin-bottom: 10px;
`;

const SignInButton = styled.button`
  cursor: pointer;
  width: 45%;
  margin: 0 auto 0 auto;
  height: 30px;
  border-radius: 5px;
  border: none;
  background: white;
`;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignInWrapper = styled.div`
  width: 30%;
  height: 30%;
  border-radius: 10px;
  background: #cfcfcf;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const LogoText = styled.h1`
  background: linear-gradient(0deg, #969696, #fff);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-family: "Red Hat Text", sans-serif;
  font-size: 28px;
  margin-left: 20px;
  font-weight: normal;
  letter-spacing: 10px;
  // margin-bottom: -4px;
`;

const LogoWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`;
