import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  imageHeight,
  imageWidth,
  buttonStyle,
  containerStyle,
} from "../../utils/style";
import { imageArray } from "../../utils/imageSource";
import { resultType } from "../../utils/resultType";
const First = (props) => {
  const navigate = useNavigate();
  const [result, setResult] = useState("");
  const [level, setLevel] = useState(0);
  const goNext = () => {
    setLevel(level + 1);
  };
  const goBack = () => {
    setLevel(level - 1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };
  const goHome = () => {
    navigate("/"); // '/'로 이동
  };
  const onClickBtn = (e) => {
    setResult([...result, e.text]);
    goNext();
  };
  const onClickBtn2 = (e) => {
    // navigate("/page/2", {
    //   state: { result: "S형" },
    // });
    setResult([...result, e.text]);
    goNext();
  };
  let count = [];
  const answer = [];
  const newResult = Object.values(result).join("");
  const resultArr = newResult.match(/.{1,3}/g);
  for (let j = 0; j < resultArr?.length; j++) {
    for (let i = 0; i < resultArr?.length; i++) {
      const test = resultArr[i].charAt(j);
      count.push(test);
    }
    //count에서 가장 많은 알파벳 한개만 추출
    const count2 = count.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    answer.push(
      Object.keys(count2).reduce((a, b) => (count2[a] > count2[b] ? a : b))
    );
    count = [];
  }
  console.log("answer:", answer.join(""));
  return (
    <>
      <div style={containerStyle.main}>
        <div style={containerStyle.sub}>
          <img
            style={{
              width: imageWidth,
              height: imageHeight,
            }}
            src={imageArray[level].src}
            alt="face"
          />
          <button style={buttonStyle.goBack} onClick={goHome}></button>
          <button
            style={buttonStyle.first}
            onClick={() => {
              onClickBtn(resultType[level * 2]);
            }}
          ></button>
          <button
            style={buttonStyle.second}
            onClick={() => {
              onClickBtn2(resultType[level * 2 + 1]);
            }}
          ></button>
        </div>
      </div>
    </>
  );
};

export default First;
