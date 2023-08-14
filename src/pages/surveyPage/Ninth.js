import React from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';

const Ninth = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location9:',location.state)
    const onClickBtn = (e) => {
        navigate('/result/1',{
            state: {result: location.state.result+'C형'}
        });
    }
    const onClickBtn2 = (e) => {
        navigate('/result/1',{
            state: {result: location.state.result+'A형'}
        });
    }
    // "S형E형C형 S형E형C형 S형E형A형" S E C
    // RIC: 꼼꼼한 기술자
    // REC: 일당백 리더
    // RIA: 예술을 즐기는 기술자
    // REA: 활동적인 예술가
    // SIC: 믿음직한 조언자
    // SEC: 솔선수범 리더
    // SIA: 자유로운 재주꾼
    // SEA: 매 순간을 즐기는 활동가
        return (
        <>
            <h3>내가 더 관심있는 일은? 9/9</h3>
            <button onClick={onClickBtn}>불량 농산물 감별하기</button>
            <button onClick={onClickBtn2}>블로그에 귀농일기 연재하기</button>
        </>
    );
}

export default Ninth;