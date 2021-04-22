import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Staff from "./components/Staff";
import Student from "./components/Student";
import Protect from "./components/ProtectRoute";
import StudentPage from "./components/StudentPage";
import StaffPage from "./components/StaffPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/staff" exact component={Staff} />
      <Route path="/student" exact component={Student} />
      <Protect path="/studentPage" exact component={StudentPage} />
      <Protect path="/staffPage" exact component={StaffPage} />
    </BrowserRouter>
  );
}

export default App;
