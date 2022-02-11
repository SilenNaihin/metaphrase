import styled from "styled-components";
import unofficialIcon from "../../img/unofficial_icon.png";
import Image from "next/image";
// import LogIn from "../../components/shared/LogIn";

interface LogIn {
}

const LogIn: React.FC<LogIn> = () => {
  return <Connect type="button">CONNECT</Connect>;
};

export default LogIn;

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
