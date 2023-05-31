import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./screens/LoginPage/LoginPage";
import LandingPage from './screens/Home/Home';
import './App.css';
import EditPage  from './screens/EditPage/EditPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={<LandingPage/>}/>
          <Route path="/edit" element={<EditPage/>}/>
       </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
