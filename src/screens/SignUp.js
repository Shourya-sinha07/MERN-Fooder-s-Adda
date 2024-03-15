import React from "react";
import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";

export default function SignUp() {
  const [creadentials, setCreadentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: creadentials.name,
        email: creadentials.email,
        password: creadentials.password,
        location: creadentials.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid document");
    }else{
      localStorage.setItem("authToken",json.authToken)
      localStorage.setItem("userEmail",creadentials.email)
  console.log(localStorage.getItem("authToken"))
      navigate("/")
    }
  };
  const onChange = (event) => {
    setCreadentials({
      ...creadentials,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="name"
              value={creadentials.name}
              onChange={onChange}
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={creadentials.email}
              onChange={onChange}
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
          
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control" 
                
              id="exampleInputPassword1"
              name="password"
              value={creadentials.password}
              onChange={onChange}
              placeholder="Password"
              minLength={5}
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              Password must conatain a  CAPITAL LETTER , small letter and special SYMbol
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="geolocation"
              value={creadentials.geolocation}
              onChange={onChange}
              placeholder="Address"
            />
          </div>

          <button  type="submit" className="btn btn-success">
               Submit

               {/* <Link to="/home " className="m-3 btn btn-success">
            Submit
          </Link> */}
          </button>
          <Link to="/login " className="m-3 btn btn-danger">
            Already a User
          </Link>
        </form>
      </div>
    </>
  );
}
