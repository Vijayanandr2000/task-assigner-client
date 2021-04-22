import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SubmitList from "./SubmitList";

const StaffPage = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  const post = () => {
    var data = {
      title: title,
      des: des,
    };
    fetch("https://task-assigner-backend.herokuapp.com/post", {
      method: "POST",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("auth")),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div>
      <div className="logout">
        <button
          className="btn btn-danger mt-3"
          onClick={() => {
            localStorage.clear();
            history.push("/home");
          }}
        >
          Logout
        </button>
      </div>
      <div className="container">
        <div className="card-head mt-5 text-center">
          <h1 className="card-title">TASK ASSIGNER</h1>
        </div>
        <div className="task">
          <div className="input-group flex-nowrap mt-3">
            <span className="input-group-text" id="addon-wrapping">
              Assignment-Title
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-group flex-nowrap mt-3">
            <textarea
              cols="20"
              rows="5"
              className="form-control"
              placeholder="Description"
              onChange={(e) => setDes(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="button">
          <button className="btn btn-success mt-3" onClick={post}>
            Post
          </button>
        </div>
      </div>
      <SubmitList />
    </div>
  );
};
export default StaffPage;
