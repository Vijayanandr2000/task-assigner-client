import React, { useEffect, useState } from "react";

const SubmitList = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://task-assigner-backend.herokuapp.com/submitData", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("auth")),
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data.user);
      })
      .catch((e) => alert(e.message));
  }, []);
  console.log(item);
  return (
    <div>
      <div className="container">
        <table class="table table-dark table-hover  table-bordered border-light text-center mt-5">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Task Title</th>
              <th scope="col">Mail</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {item.map((e) => {
              return (
                <tr>
                  <td>{e.name}</td>
                  <td>{e.title}</td>
                  <td>{e.mail}</td>
                  <td>{e.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default SubmitList;
