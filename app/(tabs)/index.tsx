import React from "react";
import LottieView from "lottie-react-native";
// eslint-disable-next-line import/no-named-as-default
import styled from "styled-components/native";

export default function HomeScreen() {
  return (
    <Container>
      <StyledLottie
        source={require("../../assets/typing.json")}
        autoPlay
        loop
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const StyledLottie = styled(LottieView)`
  width: 200px;
  height: 200px;
`;
