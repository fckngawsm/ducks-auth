import "../App/App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "../ProtectedRoute";
import DuckList from "../DuckList/DuckList";
import Header from "../Header/Header";
import MyProfile from "../MyProfile/MyProfile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import * as Auth from "../../utils/Auth";
function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();
  function handleRegistr(email, password) {
    Auth.register(email, password).then((res) => {
      navigate("/sign-in", { replace: true });
    });
  }
  function handleLogin(email , password) {
    Auth.authorize(email , password)
      .then(() => {
        setLoggedIn(true)
        navigate("/ducks" , {replace : true});
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 - не передано одно из полей");
        } else if (err.status === 401) {
          console.log("401 - пользователь с email не найден");
        }
      })
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/ducks" element={<DuckList/>} />
          <Route path="/my-profile" element={<MyProfile/>} />
        </Route>
        <Route
          path="/sign-up"
          element={<Register onRegister={handleRegistr} />}
        />
        <Route path="/sign-in" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/"
          element={
            loggedIn ? (
              <Navigate to="/ducks" replace />
            ) : (
              <Navigate to="/sign-up" replace />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
