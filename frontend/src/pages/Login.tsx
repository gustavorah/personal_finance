"use strict";
import { ChangeEvent, useState } from "react";
import NavInitial from "../components/navInital";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validation, setValidation] = useState<boolean>(true);
  
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        window.open("app/", "_self");
        console.log('ok');
      } else {
        setValidation(false);
      }
    });
  }
  return (
    <>
      <title>Login</title>

      <NavInitial />
      <div className="container-md mt-5">
        { validation === false && 
        <div className="alert alert-danger" role="alert">
          Email or password incorrect
        </div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <p className="p-3 m-3">
        <a className="link-opacity-100  fs-3" href="/">
          Home
        </a>
      </p>
    </>
  );
}
