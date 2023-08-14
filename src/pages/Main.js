import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
	return (
		<>
			<h3>직업유형으로 알아보는 박람회 속 일자리 탐색</h3>
            <h1>직업 유형 테스트</h1>
            <h3>나는 어떤 직업이 어울릴까?</h3>
            <ul>
				<Link to="/page/1"><li>시작하기</li></Link>
			</ul>
		</>
	);
};

export default Main;