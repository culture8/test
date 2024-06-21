import React from "react";
import styled from "styled-components";
import { color } from "./color";
import { textArray } from "./textArray";
import secondImage from "./assets/secondImage.png";
import icon_lock from "./assets/icon_lock.png";
import { device } from "./util";

function Second() {
  return (
    <HeaderContainer>
      <Row>
        <DivideContainer>
          <IconImage src={icon_lock} alt="Lock" />
          <TextContainer>
            <Title>{textArray.second[0]}</Title>
            <Subtitle>{textArray.second[1]}</Subtitle>
          </TextContainer>
        </DivideContainer>
        <Image src={secondImage} alt="Contents" />
      </Row>
    </HeaderContainer>
  );
}

export default Second;

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
  margin-right: 50px; /* Add margin to create space between the text and the image */
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
    font-size: 18px;
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
  max-width: 1200px; /* Optional: constrain the maximum width for better appearance */
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
