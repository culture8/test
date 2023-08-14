import React from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';

const Fifth = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location5:',location.state)
    const onClickBtn = (e) => {
        navigate('/page/6',{
            state: {result: location.state.result+'I형'}
        });
    }
    const onClickBtn2 = (e) => {
        navigate('/page/6',{
            state: {result: location.state.result+'E형'}
        });
    }
    return (
        <>
            <h3>내가 더 관심있는 일은? 5/9</h3>
            <button onClick={onClickBtn}>병든 나무 되살리기</button>
            <button onClick={onClickBtn2}>시장에서 농산물 완판시키기</button>
        </>
    );
}

export default Fifth;