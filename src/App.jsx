import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Example from "./components/example";
import UserList from "./components/user/UserList";
import Header from "./components/header";
import Footer from "./components/footer";
import UserForm from "./components/user/UserForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Example />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/create-user" element={<UserForm />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
