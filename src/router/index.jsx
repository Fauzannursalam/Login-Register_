
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({children}) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
          <Route path="/profile/:id" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
