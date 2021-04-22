import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [mails, setMails] = useState("");
  const [passwords, setPasswords] = useState("");

  const studentLogin = () => {
    var data = {
      mail,
      password,
    };
    fetch("https://task-assigner-backend.herokuapp.com/home", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Stu allow") {
          localStorage.setItem("auth", JSON.stringify(data.stuToken));
          localStorage.setItem("user", JSON.stringify(data.userStu));
          history.push("/studentpage");
        } else alert(data.message);
      })
      .catch((e) => alert(e.message));

    setMail("");
    setPassword("");
  };

  const staffLogin = () => {
    var data = {
      mails: mails,
      passwords: passwords,
    };
    fetch("https://task-assigner-backend.herokuapp.com/home", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Sta allow") {
          history.push("/staffpage");
          localStorage.setItem("auth", JSON.stringify(data.staToken));
          localStorage.setItem("userSta", JSON.stringify(data.userSta));
        } else alert(data.message);
      })
      .catch((e) => alert(e.message));
    setMails("");
    setPasswords("");
  };
  return (
    <div>
      <div className="container">
        <div className="card-head">
          <h2 className="card-title mb-3 text-center text-danger">
            LOGIN PAGE
          </h2>
        </div>
        <div className="home"></div>
        <div className="card-stu">
          <div
            className="card"
            style={{ width: 20 + "rem", height: 300 + "px" }}
          >
            <div className="card-head">
              <h2 className="card-title">Student Login</h2>
            </div>
            <div className="card-body">
              <input
                type="text"
                placeholder="Enter your E-mail"
                onChange={(e) => setMail(e.target.value)}
                value={mail}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className="btn btn-primary" onClick={studentLogin}>
                Login
              </button>
              <button
                className="btn outline-none btn-color"
                onClick={(e) => history.push("/student")}
              >
                Register as a Student
              </button>
            </div>
          </div>
        </div>
        <div className="card-staff">
          <div
            className="card"
            style={{ width: 20 + "rem", height: 300 + "px" }}
          >
            <div className="card-head">
              <h2 className="card-title">Staff Login</h2>
            </div>
            <div className="card-body">
              <input
                type="text"
                value={mails}
                placeholder="Enter your E-mail"
                onChange={(e) => setMails(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={passwords}
                onChange={(e) => setPasswords(e.target.value)}
              />
              <button className="btn btn-primary" onClick={staffLogin}>
                Login
              </button>
              <button
                className="btn outline-none btn-color"
                onClick={() => history.push("/staff")}
              >
                Register as a Staff
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
