import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import home from "./Pages/Home/home";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/home' element={<home/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
