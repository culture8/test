import React from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';

const Eighth = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location8:',location.state)
    const onClickBtn = (e) => {
        navigate('/page/9',{
            state: {result: location.state.result+'I형'}
        });
    }
    const onClickBtn2 = (e) => {
        navigate('/page/9',{
            state: {result: location.state.result+'E형'}
        });
    }
    return (
        <>
            <h3>내가 더 관심있는 일은? 8/9</h3>
            <button onClick={onClickBtn}>식물 전염병 백신 개발하기</button>
            <button onClick={onClickBtn2}>농사를 위한 투자설명회 열기</button>
        </>
    );
}

export default Eighth;