import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/home";
import MovieCard from "./Components/Cards/MovieCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/sign" element={<Signup />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Home />} />
          <Route exact path="/card" element={<MovieCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
