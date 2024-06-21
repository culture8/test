import React from "react";
import styled from "styled-components";
import { color } from "./color";
import { textArray } from "./textArray";
import thirdImage from "./assets/thirdImage.png";
import clockImage from "./assets/clockImage.png";
import { device } from "./util";

function Third() {
  return (
    <HeaderContainer>
      <Row>
        <Image src={thirdImage} alt="Contents" />
        <DivideContainer>
          <IconImage src={clockImage} alt="Clock" />
          <TextContainer>
            <Title>{textArray.third[0]}</Title>
            <Subtitle>{textArray.third[1]}</Subtitle>
          </TextContainer>
        </DivideContainer>
      </Row>
    </HeaderContainer>
  );
}

export default Third;

const HeaderContainer = styled.div`
  background-color: $F9F9F9;
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
  margin-left: 120px;
  @media ${device.mobile} {
    margin-left: 45px;
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
  font-size: 18px;
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
  @media ${device.mobile} {
    width: 90%;
  }
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
