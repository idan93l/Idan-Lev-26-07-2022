import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile/:username" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
