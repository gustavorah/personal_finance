import NavInitial from "../components/navInital";

export default function Login() {
  return (
    <>
    <head>
      <title>Login</title>
    </head>

      <body>
        <NavInitial />
        <div className="container-md mt-5">
        
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
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
      </body>
    </>
  );
}
