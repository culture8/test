import React,{useState} from 'react';
import { Link , useNavigate} from 'react-router-dom';

const First = (props) => {
    const navigate = useNavigate();
    const [result, setResult] = useState('');
    const onClickBtn = (e) => {
        navigate('/page/2',{
            state: {result: 'R형'}
        });
    }
    const onClickBtn2 = (e) => {
        navigate('/page/2',{
            state: {result: 'S형'}
        });
    }
    return (
        <>
            <h3>내가 더 관심있는 일은? 1/9</h3>
            <button onClick={onClickBtn}>고장난 트랙터 수리하기</button>
            <button onClick={onClickBtn2}>농촌 봉사활동가기</button>
        </>
    );
}

export default First;