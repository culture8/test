import React from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';

const Second = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log('location:',location.state)
    const onClickBtn = (e) => {
        navigate('/page/3',{
            state: {result: location.state.result+'I형'}
        });
    }
    const onClickBtn2 = (e) => {
        navigate('/page/3',{
            state: {result: location.state.result+'E형'}
        });
    }
    return (
        <>
            <h3>내가 더 관심있는 일은? 2/9</h3>
            <button onClick={onClickBtn}>식물 유전자 연구하기</button>
            <button onClick={onClickBtn2}>우리 마을 청년회장 되기</button>
        </>
    );
}

export default Second;