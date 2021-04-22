import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const StudentPage = () => {
  const history = useHistory();
  const [item, setItem] = useState([]);
  const [id, setId] = useState([]);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  //   const [check, setCheck] = useState(false);

  useEffect(() => {
    fetch("https://task-assigner-backend.herokuapp.com/post", {
      headers: {
        "content-type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("auth")),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        var data1 = Array.from(data.user);
        // console.log(data1);
        // console.log(data.user);
        setItem(data1);
      });
    var user = JSON.parse(localStorage.getItem("user"));
    setName(user.name);
    setMail(user.mail);
  }, []);

  //   console.log(id);

  const submit = (ids) => {
    fetch("https://task-assigner-backend.herokuapp.com/post", {
      headers: {
        "content-type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("auth")),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        var data1 = Array.from(data.user);
        // console.log(data1);
        // console.log(data.user);
        setItem(data1);
        setId(ids);
      });
    // console.log(ids);
    var data = {
      name: name,
      mail: mail,
      status: "completed",
      id: ids,
    };
    // console.log(data);
    fetch("https://task-assigner-backend.herokuapp.com/submit", {
      method: "POST",
      headers: {
        authorization: JSON.parse(localStorage.getItem("auth")),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message));
  };
  return (
    <div>
      <button
        className="btn btn-danger mt-3 ml-5"
        onClick={() => {
          localStorage.clear();
          history.push("/");
        }}
      >
        Logout
      </button>
      <div className="container">
        <div className="card-head">
          <h1 className="card-title text-warning text-center">TASK DETAIL'S</h1>
        </div>
        {item.map((e) => {
          return (
            <div className={`card mt-5 ${e._id == id ? "completed" : ""}`}>
              <div className="card-body student-page">
                <h2>{e.title}</h2>
                <h5>{e.description}</h5>

                <button
                  className="btn btn-success"
                  value={e._id}
                  onClick={(e) => {
                    var ids = e.target.value;
                    submit(ids);
                  }}
                >
                  Completed
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default StudentPage;
