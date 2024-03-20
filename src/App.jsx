import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Example from "./components/example";
import UserList from "./components/user/UserList";
import Header from "./components/header";
import Footer from "./components/footer";
import UserForm from "./components/user/UserForm";
import Login from "./components/Auth/Login";
import Welcome from "./components/welcome";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/create-user" element={<UserForm />}></Route>
          <Route path="/user/:userId" element={<UserForm />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
