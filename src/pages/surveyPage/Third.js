import React from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';

const Third = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log('location3:',location.state)
    const onClickBtn = (e) => {
        navigate('/page/4',{
            state: {result: location.state.result+'C형'}
        });
    }
    const onClickBtn2 = (e) => {
        navigate('/page/4',{
            state: {result: location.state.result+'A형'}
        });
    }
    return (
        <>
            <h3>내가 더 관심있는 일은? 3/9</h3>
            <button onClick={onClickBtn}>매일 비료 구매량, 사용량 기록하기</button>
            <button onClick={onClickBtn2}>마을 회관에 벽화 그리기</button>
        </>
    );
}

export default Third;