import React from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';

const Sixth = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location6:',location.state)
    const onClickBtn = (e) => {
        navigate('/page/7',{
            state: {result: location.state.result+'C형'}
        });
    }
    const onClickBtn2 = (e) => {
        navigate('/page/7',{
            state: {result: location.state.result+'A형'}
        });
    }
    return (
        <>
            <h3>내가 더 관심있는 일은? 6/9</h3>
            <button onClick={onClickBtn}>판매 후 남은 꿀병 재고 확인하기</button>
            <button onClick={onClickBtn2}>동네 축제 기획하기</button>
        </>
    );
}

export default Sixth;