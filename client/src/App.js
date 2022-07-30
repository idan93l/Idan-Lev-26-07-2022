import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import "./App.css";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <Home /> : <Register />} />
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
      </AuthContextProvider>
    </>
  );
}

export default App;
