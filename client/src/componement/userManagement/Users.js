import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/user")
      .then(function (response) {
        setUser(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const Navigate = useNavigate();
  function GetUserDetail(evt) {
    evt.preventDefault();
    const id = evt.target.id;
    Navigate(`/user/${id}`);
  }
  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">userID</th>
            <th scope="col">userName</th>
            <th scope="col">email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <th scope="row">{user.userID}</th>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>
                {" "}
                <div className="d-flex">
                  <button
                    id={user.userID}
                    type="button"
                    className="btn btn-primary"
                    onClick={GetUserDetail}
                  >
                    Detail
                  </button>
                  <button
                    id={user.userID}
                    type="button"
                    className="btn btn-info"
                    onClick={GetUserDetail}
                  >
                    Edit
                  </button>
                  <button
                    id={user.userID}
                    type="button"
                    className="btn btn-danger"
                    onClick={GetUserDetail}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
