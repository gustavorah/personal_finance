export default function NavInitial() {
  return (
    <div>
      
      <ul className="nav nav-underline nav-fill justify-content-center fs-3 bg-primary">
        <li className="nav-item">
          <a className="nav-link text-light" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="./login">
            Entrar
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="./register">
            Registrar
          </a>
        </li>
      </ul>
    </div>
  );
}
