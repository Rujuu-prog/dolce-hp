import styled from "styled-components";

type colorProps = {
  black?: boolean;
  white?: boolean;
};

export const H2 = styled.h2<colorProps>`
  color: ${(props) =>
    props.black ? "#4a4946" : props.white ? "#fcf4e4" : "#fff"};
`;
