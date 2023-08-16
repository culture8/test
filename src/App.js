import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import "./App.css";
import Main from "./pages/Main";
import First from "./pages/surveyPage/First";
import NotFound from "./pages/NotFound";

import Result from "./pages/surveyPage/Result";

function App({ navigation }) {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/page/1" element={<First />}></Route>
          <Route path="/result" element={<Result />}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
