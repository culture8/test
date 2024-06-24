import React from "react";
import styled from "styled-components";
import { color } from "./color";
import { textArray } from "./textArray";
import fourthImage from "./assets/fourthImage.png";
import icon_check from "./assets/icon_check.png";
import { device } from "./util";

function Fourth() {
  return (
    <HeaderContainer>
      <Row>
        <DivideContainer>
          <IconImage src={icon_check} alt="Detective" />
          <TextContainer>
            <Title>{textArray.fourth[0]}</Title>
            <Subtitle>{textArray.fourth[1]}</Subtitle>
          </TextContainer>
        </DivideContainer>
        <Image src={fourthImage} alt="Detective" />
      </Row>
    </HeaderContainer>
  );
}

export default Fourth;

const HeaderContainer = styled.div`
  background-color: ${color.grey};
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  @media ${device.mobile} {
    padding: 5px;
  }
`;

const DivideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 50px;
  @media ${device.mobile} {
    margin-right: 10px;
  }
`;

const Image = styled.img`
  width: 220px;
  height: 250px;
  @media ${device.mobile} {
    height: 150px;
    width: 150px;
    margin: 20px;
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 36px;
  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const Subtitle = styled.p`
  color: ${color.black};
  font-size: 18px; /* Adjust font size for better readability */
  @media ${device.mobile} {
    font-size: 8px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center the content within the Row */
  width: 100%;
  max-width: 1200px;
`;

const TextContainer = styled.div`
  white-space: pre-line;
`;

const IconImage = styled.img`
  width: 36px;
  height: 36px;
  margin-bottom: -20px;
  @media ${device.mobile} {
    width: 24px;
    height: 24px;
    margin-bottom: -10px;
  }
`;
