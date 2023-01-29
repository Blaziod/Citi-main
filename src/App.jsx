import React from "react";
import './App.css';
import { Login } from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProposeTopic } from "./Pages/ProposeTopic";
import { Register } from "./Register";
import { LecturerRegister } from "./LecturerRegister";
import { LecturerLogin } from "./LecturerLogin";
// import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";



function App() {
  // const [currentForm, setCurrentForm] = useState('Login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (

    <div className="App">
      {


        <BrowserRouter>

          <Routes>
            <Route index element={<Home />} />
            <Route path="ProposeTopic" element={<ProposeTopic />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="LecturerRegister" element={<LecturerRegister />} />
            <Route path="LecturerLogin" element={<LecturerLogin />} />
            <Route path="*" element={<NoPage />} />


          </Routes>
        </BrowserRouter>
      }
    </div>

  );
}

export default App;
