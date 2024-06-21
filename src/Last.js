import React from "react";
import styled from "styled-components";
import detective from "./assets/detective.png";
import { textArray } from "./textArray";
import { color } from "./color";
import betaImage from "./assets/betaImage.png";
import { device } from "./util";

function Fifth() {
  return (
    <HeaderContainer>
      <Row>
        <DivideContainer>
          <IconImage src={betaImage} alt="Beta" />
          <TextContainer>
            <Title>{textArray.leftLast[0]}</Title>
            <Subtitle>{textArray.leftLast[1]}</Subtitle>
          </TextContainer>
          <LeftButton
            onClick={() => {
              window.location.href = "https://forms.gle/1hTzqK7ohJc9xAjg9";
            }}
          >
            의뢰인 가입 문의
          </LeftButton>
        </DivideContainer>
      </Row>
      <Row>
        <DivideContainer>
          <IconImage src={betaImage} alt="Beta" />
          <TextContainer>
            <Title>{textArray.rightLast[0]}</Title>
            <Subtitle>{textArray.rightLast[1]}</Subtitle>
          </TextContainer>
          <RightButton
            onClick={() => {
              window.location.href = "https://forms.gle/4c9Xoo6vSMjQpfan6";
            }}
          >
            탐정 가입 문의
          </RightButton>
        </DivideContainer>
      </Row>
    </HeaderContainer>
  );
}

export default Fifth;

const HeaderContainer = styled.div`
  background-color: ${color.main};
  width: 100%;
  padding-left: 140px;
  display: flex;
  @media ${device.mobile} {
    padding: 5px;
  }
`;

const DivideContainer = styled.div``;

const Title = styled.h1`
  color: black;
  font-size: 36px;
  font-weight: bold;
  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const Subtitle = styled.p`
  color: ${color.black};
  font-size: 18px;
  @media ${device.mobile} {
    font-size: 6px;
  }
`;

const LeftButton = styled.button`
  background-color: ${color.white};
  color: ${color.black};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 120px;
  font-size: 12px;
  @media ${device.mobile} {
    font-size: 8px;
  }
`;
const RightButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 120px;
  font-size: 12px;
  @media ${device.mobile} {
    font-size: 8px;
  }
`;

const Row = styled.div`
  display: flex;
  margin: 20px;
  @media ${device.mobile} {
    margin-bottom: 20px;
    margin-right: 5px;
  }
`;

const TextContainer = styled.div`
  white-space: pre-line;
`;

const IconImage = styled.img`
  width: 36px;
  height: 18px;
  margin-bottom: -20px;
  @media ${device.mobile} {
    width: 18px;
    height: 9px;
    margin-bottom: -15px;
  }
`;
