import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  imageHeight,
  imageWidth,
  buttonStyle,
  containerStyle,
} from "../../utils/style";
import { imageArray } from "../../utils/imageSource";

const Result = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const totalResult = state.totalResult;
  //RIC: 꼼꼼한 기술자
  //REC: 일당백 리더
  //RIA: 예술을 즐기는 기술자
  //REA: 활동적인 예술가
  //SIC: 믿음직한 조언자
  //SEC: 솔선수범 리더
  // SIA: 자유로운 재주꾼
  // SEA: 매 순간을 즐기는 활동가
  const totalResultType = [
    {
      type: "RIC",
      image: require("../../assets/2x/Artboard 12@2x.png"),
    },
    {
      type: "REC",
      image: require("../../assets/2x/Artboard 13@2x.png"),
    },
    {
      type: "RIA",
      image: require("../../assets/2x/Artboard 16@2x.png"),
    },
    {
      type: "REA",
      image: require("../../assets/2x/Artboard 17@2x.png"),
    },
    {
      type: "SIC",
      image: require("../../assets/2x/Artboard 14@2x.png"),
    },
    {
      type: "SEC",
      image: require("../../assets/2x/Artboard 15@2x.png"),
    },
    {
      type: "SIA",
      image: require("../../assets/2x/Artboard 18@2x.png"),
    },
    {
      type: "SEA",
      image: require("../../assets/2x/Artboard 19@2x.png"),
    },
  ];
  const getImage = (totalResult) => {
    const result = totalResultType.filter((item) => item.type === totalResult);
    return result[0]?.image;
  };
  console.log("getImage", getImage(totalResult));
  const goHome = () => {
    navigate("/"); // '/'로 이동
  };
  return (
    <>
      <div style={containerStyle.main}>
        <div style={containerStyle.sub}>
          <img
            style={{
              width: imageWidth,
              height: imageHeight,
            }}
            src={getImage(totalResult)}
            alt="face"
          />
          <button style={buttonStyle.goHome} onClick={goHome}></button>
        </div>
      </div>
    </>
  );
};

export default Result;
