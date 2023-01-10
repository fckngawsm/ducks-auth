import "../App/App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProtectedRoute from "../../utils/ProtectedRoute";
import DuckList from "../DuckList/DuckList";
import Header from "../Header/Header";
import MyProfile from "../MyProfile/MyProfile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import * as Auth from "../../utils/Auth";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  //Хук для проверки токена при каждом монтировании компонента App
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) return;
    Auth.checkToken(jwt)
      .then((res) => {
        setEmail(res.data.email);
        setLoggedIn(true);
        navigate("/", { replace: false });
      })
      .catch((err) => console.log(err));
  }, []);
  function handleRegistr(email, password) {
    Auth.register(email, password).then((res) => {
      navigate("/sign-in", { replace: true });
    });
  }
  function handleLogin(email, password) {
    Auth.authorize(email, password)
      .then(() => {
        setLoggedIn(true);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        if (err.status === 400) {
          console.log("400 - не передано одно из полей");
        } else if (err.status === 401) {
          console.log("401 - пользователь с email не найден");
        }
      });
  }
  function handleLogout() {
    localStorage.removeItem("jwt");
    navigate("/sign-up", { replace: true });
    setEmail("");
    setLoggedIn(false);
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Header onLogout={handleLogout} />
              <DuckList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-profile"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <MyProfile email={email} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sign-up"
          element={<Register onRegister={handleRegistr} />}
        />
        <Route path="/sign-in" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
