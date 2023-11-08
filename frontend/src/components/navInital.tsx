export default function NavInitial() {
  return (
    <ul className="nav nav-underline nav-fill justify-content-center fs-3">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./login">
          Entrar
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="./register">
          Registrar
        </a>
      </li>
    </ul>
  );
}
