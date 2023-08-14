import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();
    const onClickBtn = () => {
        navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
      };
    return (
		<>
        <button onClick={onClickBtn}>뒤로가기</button>
         <h1>대한민국 농업 박람회 로고 들어가는 자리</h1>
        </>
    );
}

export default Header;