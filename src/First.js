import React from "react";
import styled from "styled-components";
import detective from "./assets/detective.png";
import { textArray } from "./textArray";
import { color } from "./color";
import { device } from "./util";

function First() {
  return (
    <HeaderContainer>
      <Row>
        <DivideContainer>
          <TextContainer>
            <Title>{textArray.first[0]}</Title>
            <Subtitle>{textArray.first[1]}</Subtitle>
          </TextContainer>
          <Button
            onClick={() => {
              window.location.href = "https://forms.gle/1hTzqK7ohJc9xAjg9";
            }}
          >
            탐클 시작하기
          </Button>
        </DivideContainer>
        <Image src={detective} alt="Detective" />
      </Row>
    </HeaderContainer>
  );
}

export default First;

const HeaderContainer = styled.div`
  background-color: ${color.main};
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  @media ${device.mobile} {
    padding: 5px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
`;

const DivideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 50px;
`;

const Image = styled.img`
  width: auto;
  height: 250px;
  @media ${device.mobile} {
    height: 200px;
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
  color: ${color.white};
  font-size: 18px;

  @media ${device.mobile} {
    font-size: 8px;
  }
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
  margin-top: 20px; /* Optional: add some space between the subtitle and button */
`;

const TextContainer = styled.div`
  white-space: pre-line;
`;
