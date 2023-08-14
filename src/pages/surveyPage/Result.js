import React from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';

const Result = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    // console.log('result:',location.state.result)
    //location.state.result에서 한글 제거
    const newResult = location.state.result.replace(/[^a-zA-Z]/g,"");
    //newResult를 3글자씩 나누어서 배열에 저장
    const resultArr = newResult.match(/.{1,3}/g);
    // 배열 각 요소 첫번째 알파벳 갯수 비교
    let count=[]
    const answer = []
    for(let j=0; j<resultArr.length; j++){
      for(let i=0; i<resultArr.length; i++){
        const test = resultArr[i].charAt(j)
        count.push(test)
      }
      //count에서 가장 많은 알파벳 한개만 추출  
      const count2 = count.reduce((acc,cur)=>{
        acc[cur] = (acc[cur] || 0)+1;
        return acc;
      }
      ,{});
      answer.push(Object.keys(count2).reduce((a,b)=>count2[a]>count2[b]?a:b))
      count =[]
    }
    const result = answer.join('')
    console.log(result)
	return (
		<>
    <h1>결과표</h1>
    <h1>{result}</h1>
		<Link to="/"><li>처음으로</li></Link>
		</>
	);
};

export default Result;