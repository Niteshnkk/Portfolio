import { Link } from 'react-router-dom';
import styles from "../Navbar/Navbar.module.css";
import { useState, useEffect } from 'react';
import info1 from "../../assets/info.png";
import line from "../../assets/line.png";

const logo = {
  width: "6rem",
  lineHeight: "2rem",
  fontSize: "18px",
  textDecoration: "none"
};

const line_logo = {
  display: "block",
  margin: "0 auto",
  width: "30px",   
  height: "25px"
};

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    if (menu) {
      const timer = setTimeout(() => {
        setShowLine(false);
      }, 3000); // Hide line after 3 seconds

      return () => clearTimeout(timer); // Cleanup on unmount or menu change
    }
  }, [menu]);

  const handleClick = (menuItem) => {
    setMenu(menuItem);
    setShowLine(true); // Show line immediately on click
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="badge text-bg-primary text-wrap" style={logo} to="/">Nitesh</Link>
        <button className="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-primary" to="/" onClick={() => handleClick("home")}>
                <h6>Home </h6>
                {menu === "home" && showLine ? <img src={line} alt="line" style={line_logo} /> : null}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/about" onClick={() => handleClick("about")}>
                About Me
                {menu === "about" && showLine ? <img src={line} alt="line" style={line_logo} /> : null}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/services" onClick={() => handleClick("services")}>
                Services
                {menu === "services" && showLine ? <img src={line} alt="line" style={line_logo} /> : null}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/my-work" onClick={() => handleClick("my-work")}>
                My Work
                {menu === "my-work" && showLine ? <img src={line} alt="line" style={line_logo} /> : null}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/contact" onClick={() => handleClick("contact")}>
                Contact
                {menu === "contact" && showLine ? <img src={line} alt="line" style={line_logo} /> : null}
              </Link>
            </li>
            <div className="connect_btn position-absolute top-3 end-0 me-5 translate-middle-x">
            <Link to="/contact" >
                <button className="btn" data-type="button_gradient" >Connect with me</button>
              </Link>
              l<Link to="/about">
              <img src={info1} alt="info-get" className={styles.info} />
              </Link>
            
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
