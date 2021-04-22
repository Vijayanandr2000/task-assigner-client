import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Student = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    var data = {
      name: name,
      mail: mail,
      password: password,
    };
    fetch("https://task-assigner-backend.herokuapp.com/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        if (data.message == "Registered") {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div>
      <div className="reg-stu">
        <div className="container">
          <div className="card-head mb-5">
            <div className="card-title text-center">
              <h2>Student Registrtion</h2>
            </div>
          </div>
          <div class="input-group mt-5 mb-5">
            <span class="input-group-text" id="basic-addon1">
              Name
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group mb-5">
            <span className="input-group-text" id="basic-addon1">
              E-mail
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Email-ID"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="input-group mb-5">
            <span className="input-group-text" id="basic-addon1">
              Password
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary " onClick={register}>
            Register
          </button>
          <button
            className="btn btn-warning ml-5"
            onClick={() => history.push("/")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
export default Student;
