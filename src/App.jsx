import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Example from "./components/example";
import UserList from "./components/user/UserList";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/Auth/Login";
import Welcome from "./components/Welcome";
import UserFormCreate from "./components/user/UserFormCreate";
import UserFormEdit from "./components/user/UserFormEdit";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginSuccess } from "./features/authSlice";
import PrivateRoute from "./components/PrivateRoute";
import ChangePassword from "./components/Auth/ChangePassword";
import HouseForm from "./components/house/HouseForm";
import HouseFormCreate from "./components/house/HouseFormCreate";
import Chat from "./components/chat/Chat";
import HouseList from "./components/house/HouseList";



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const sessionData = localStorage.getItem('sessionData');
    if(sessionData){
      dispatch(loginSuccess(JSON.parse(sessionData)));
    }
  })

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/*Rutas Privadas*/}
          <Route path="/" element={<PrivateRoute Component={Welcome}/>}/>
          <Route path="/users" element={<PrivateRoute Component={UserList}/>}/>
          <Route path="/user/:userId" element={<PrivateRoute Component={UserFormEdit}/>}/>
          <Route path="/change-password" element={<PrivateRoute Component={ChangePassword}/>}/>

          {/* Rutas de casas */}
          <Route path="/create-house" element={<PrivateRoute Component={HouseFormCreate }/>}/>
          <Route path="/houses" element={<PrivateRoute Component={HouseList}/>}/>

          {/* Rutas del chat */}
          <Route path="/chat" element={<PrivateRoute Component={Chat}/>}/>

          {/*Rutas publicas*/}
          <Route path="/create-user" element={<UserFormCreate />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
