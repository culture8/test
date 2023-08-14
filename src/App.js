import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './pages/Header';
import Main from './pages/Main';
import First from './pages/surveyPage/First';
import Second from './pages/surveyPage/Second';
import NotFound from './pages/NotFound';
import Third from './pages/surveyPage/Third';
import Fourth from './pages/surveyPage/Fourth';
import Fifth from './pages/surveyPage/Fifth';
import Sixth from './pages/surveyPage/Sixth';
import Seventh from './pages/surveyPage/Seventh';
import Eighth from './pages/surveyPage/Eighth';
import Ninth from './pages/surveyPage/Ninth';
import Result from './pages/surveyPage/Result';

function App({navigation}) {
  return (
    <div className="App">
<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/page/1" element={<First />}></Route>
					<Route path="/page/2" element={<Second />}></Route>
          <Route path="/page/3" element={<Third />}></Route>
          <Route path="/page/4" element={<Fourth />}></Route>
          <Route path="/page/5" element={<Fifth />}></Route>
          <Route path="/page/6" element={<Sixth />}></Route>
          <Route path="/page/7" element={<Seventh />}></Route>
          <Route path="/page/8" element={<Eighth />}></Route>
          <Route path="/page/9" element={<Ninth />}></Route>
          <Route path="/result/1" element={<Result />}></Route>

					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
