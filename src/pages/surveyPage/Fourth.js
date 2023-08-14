import React from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';

const Fourth = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location4:',location.state)
    const onClickBtn = (e) => {
        navigate('/page/5',{
            state: {result: location.state.result+'R형'}
        });
    }
    const onClickBtn2 = (e) => {
        navigate('/page/5',{
            state: {result: location.state.result+'S형'}
        });
    }
    return (
        <>
            <h3>내가 더 관심있는 일은? 4/9</h3>
            <button onClick={onClickBtn}>농기계 정비기능사 자격증 따기</button>
            <button onClick={onClickBtn2}>어르신 말벗 해드리기</button>
        </>
    );
}

export default Fourth;