import NavInitial from "../components/navInital";
import React, { useState } from "react";


function Register() {

  const [dados, setDados] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  type Erros = {
    name?: string;
    email?: string;
    password?: string;
  }

  const [erros, setErros] = useState<Erros>({});
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDados({
      ...dados,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    //setErros(validar(dados));
  }

  /*const validar = (dados: {name: string; email: string; password: string}) => {
    
    let erros: Erros = {};

    if (!dados.name) {
      erros.name = 'Name is mandatory';
    }

    if (!dados.email) {
      erros.email = 'Email is mandatory'
    } else if (!/\S+@\S+\.\S+/.test(dados.email)) {
      erros.email = 'Invalid email';
    }

  return erros;
  }*/
  return (
    <>
    <head>
      <title>Register</title>
    </head>
      <body>
        <NavInitial />

        <div className="container mt-5">
        
          <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                required
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
                required
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
                required
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
      </body>
    </>
  );
}

export default Register;