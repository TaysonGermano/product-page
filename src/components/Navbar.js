import Cart from "./Cart";
import Avatar from "./Avatar";
import logo from "../img/logo.svg";

export const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src={logo} alt="Sneakers" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Collection
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Women
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <Cart />
              <Avatar />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
