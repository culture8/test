import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  imageHeight,
  imageWidth,
  buttonStyle,
  containerStyle,
} from "../utils/style";
const Main = (props) => {
  // 1080/1920
  // 	1. 시작하기 버튼
  // width: 300px
  // height: 100px
  // borderRadius: 50px
  // alignSelf: center
  // bottom: 162px
  // left:390px

  // width: 80px
  // height: 80px
  // left: 35px
  // top: 50px

  return (
    <>
      <div style={containerStyle.main}>
        <div style={containerStyle.sub}>
          <Link style={buttonStyle.main} to="/page/1"></Link>
          <img
            style={{
              width: imageWidth,
              height: imageHeight,
            }}
            src={require("../assets/2x/Artboard 1@2x.png")}
            alt="face"
          />
        </div>
      </div>
    </>
  );
};

export default Main;
