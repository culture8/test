import React from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';

const Seventh = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location7:',location.state)
    const onClickBtn = (e) => {
        navigate('/page/8',{
            state: {result: location.state.result+'R형'}
        });
    }
    const onClickBtn2 = (e) => {
        navigate('/page/8',{
            state: {result: location.state.result+'S형'}
        });
    }
    return (
        <>
            <h3>내가 더 관심있는 일은? 7/9</h3>
            <button onClick={onClickBtn}>채소 심고 가꾸기</button>
            <button onClick={onClickBtn2}>카페에서 이웃들과 수다 떨기</button>
        </>
    );
}

export default Seventh;