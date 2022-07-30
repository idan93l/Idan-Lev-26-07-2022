import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import "./App.css";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={user ? <Home /> : <Register />} />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <LogIn />}
            />
            <Route
              path="/register"
              element={user ? <Navigate to="/" /> : <Register />}
            />
            <Route path="/profile/:username" element={<Profile />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
