import React from "react";
import styled from "styled-components";
import { color } from "./color";
import { device } from "./util";

const Footer = () => {
  const text = `서울특별시 서대문구 통일로 484 \n 서울시립대학교 공유캠퍼스 301-2`;
  const admText = `대표: 최민기 \n\n tamkleadm@naver.com`;
  return (
    <Container>
      <MainText>Pladder(플래더)</MainText>
      <TextContainer>
        <SubText>{text} </SubText>
      </TextContainer>
      <TextContainer>
        <SubText>{admText}</SubText>
      </TextContainer>
      <CopyrightText>
        Copyright © 2024 Pladder Corp. All rights reserved.
      </CopyrightText>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  background-color: ${color.black};
  width: 100%;
  padding: 20px;
  padding-left: 50px;
  justify-content: center;
  align-items: center;
  @media ${device.mobile} {
    padding: 5px;
  }
`;

const MainText = styled.h1`
  color: ${color.white};
  font-size: 24px;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const SubText = styled.p`
  color: ${color.white};
  font-size: 16px;
  @media ${device.mobile} {
    font-size: 8px;
  }
`;

const CopyrightText = styled.p`
  color: ${color.white};
  font-size: 8px;
  @media ${device.mobile} {
    font-size: 4px;
  }
`;

const TextContainer = styled.div`
  white-space: pre-line;
`;
