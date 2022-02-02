import styled from "styled-components";

interface TextStyles {
  bold?: boolean;
  size?: string;
  spacing?: string;
  color?: string;
}

export const Text = styled.p<TextStyles>`
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: ${(p) => (p.bold ? 600 : 300)};
  font-size: ${(props) => props.size || "18px"};
  line-height: 6px;
  letter-spacing: ${(props) => props.spacing || "normal"};
  color: ${(p) => p.color || "#fff"};
`;

interface ButtonStyles {
  padding?: string;
  color?: string;
  border?: string;
  width?: string;
  height?: string;
  shadow?: string;
}

export const Button = styled.button<ButtonStyles>`
  padding: ${(p) => p.padding || "2px 4px"};
  background: ${(p) => p.color || "#ff0000"};
  border-radius: 10px;
  border: ${(p) => p.border || "none"};
  width: ${(p) => p.width || "100%"};
  height: ${(p) => p.height || "40px"};
  cursor: pointer;
  outline: none !important;
  box-shadow: ${(p) => p.shadow || "none"};
`;

interface IconStyles {
  padding?: string;
  width?: string;
  height?: string;
}

export const ButtonIcon = styled.div<IconStyles>`
  padding: ${(p) => p.padding || "0 3px"};
  width: ${(p) => p.width || "28px"};
  height: ${(p) => p.height || "28px"};
  position: relative;
  outline: none !important;
`;

interface FlexStyles {
  alignItems?: string;
  justifyContent?: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
}

export const FlexRow = styled.div<FlexStyles>`
  display: flex;
  flex-direction: row;
  align-items: ${(p) => p.alignItems || "center"};
  justify-content: ${(p) => p.justifyContent || "flex-start"};
  padding: 0px;
  height: ${(p) => p.fullHeight && "100%"};
  width: ${(p) => p.fullWidth && "100%"};
`;

export const FlexColumn = styled.div<FlexStyles>`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => p.alignItems || "center"};
  justify-content: ${(p) => p.justifyContent || "flex-start"};
  padding: 0px;
  height: ${(p) => p.fullHeight && "100%"};
  width: ${(p) => p.fullWidth && "100%"};
`;
