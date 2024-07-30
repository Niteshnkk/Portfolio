import { useState } from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";

const Footer = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "06276f78-4201-4e23-9ac0-5f06b54cd7e6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(data.message)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="name">Nitesh</p>
        <p className="intro"> Hi, I&apos;m Nitesh, a B.Tech graduate in Computer Science and Engineering. I have a deep passion for front-end development and enjoy creating engaging user interfaces using HTML, CSS, JavaScript, ReactJS, and Bootstrap. Currently.</p>
        <form onSubmit={onSubmit}>
        <div className="email-container">
         

            <input
              type="email"
              className="email-input"
              name="email"
              placeholder="Enter your email"
              required
            />
            <button className="subscribe-button" data-type="button_gradient" type="submit" >
              Subscribe
            </button>
        
          {
            console.log(result)
          }
        </div>
        </form>
      </div>
      <div className="footer-bottom">
        <div className="left-content">
          <span>&copy; Nitesh. All rights reserved.</span>
        </div>
        <div className="right-content">
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <Link to="/contact">
            <button className="connect-button" data-type="button_gradient">
              Connect with me
            </button>
          </Link>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
