import {Route, Routes, BrowserRouter} from "react-router-dom";
import {RecoilRoot} from 'recoil';
import './App.css';

// Component
import {Main} from './pages/quiz/Main';
import {Quiz} from './pages/quiz/Quiz';
import {Result} from './pages/quiz/Result';
import {ROUTE} from "./common/routes";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTE.MAIN} element={<Main/>}/>
            <Route path={ROUTE.QUIZ} element={<Quiz/>}/>
            <Route path={ROUTE.RESULT} element={<Result/>}/>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
