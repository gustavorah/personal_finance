"use client";
import NavInitial from "../components/navInital";
import React, { useEffect, useState } from "react";

function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDados({
  //     ...dados,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (errorPassword == "") {
      const user = {
        name,
        email,
        password,
      };

      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        window.open("/login", "_self");
        console.log("ok"); //verificar algo para renderizar para usuario
      } else {
        console.log("not ok"); //verificar algo para renderizar para usuario
      }
    }
  };

  useEffect(() => {
    if (password === confirmPassword) {
      setErrorPassword("");
    } else {
      setErrorPassword("Passwords must be equals");
    }
  }, [password, confirmPassword]);

  return (
    <>
      <title>Register</title>
      <NavInitial />

      <div className="container mt-5">
        <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <label htmlFor="validationCustom01" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              onChange={(e) => setName(e.target.value)}
              //required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="validationCustom02"
              onChange={(e) => setPassword(e.target.value)}
              //required
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              Confirm your Password
            </label>
            <input
              type="password"
              className="form-control"
              id="validationCustom04"
              onChange={(e) => setConfirmPassword(e.target.value)}
              //required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="validationCustom05" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="validationCustom05"
              onChange={(e) => setEmail(e.target.value)}
              //required
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
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

export default Register;
