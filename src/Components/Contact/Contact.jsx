import { useState } from "react"
import "../Contact/Contact.css"
import contact from "../../assets/contact.png"
import location from "../../assets/location.png"
import mail from "../../assets/mail.png"
import call from "../../assets/phone.png"
const Contact = () => {

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "30a23860-9880-43ee-b3fa-de69b9d6eaba");
  
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
        <div>
            <div className="contact-container">
                <div className="title mt-3">
                    <h1>Get in Touch</h1>
                    <img src={contact} alt="contact-us" />
                </div>
                <div className="left">
                    <div className="left-c">
                        <h2>Lets&apos;s talk</h2>
                        <p>I am currently available to take a new projects .so feel free to send me a message about anything that you want me to work on. You can contact any time.</p>
                        <div className="email">
                            <img src={mail}alt="mail" />
                            <p>nitesh9010kumar@gmail.com</p>
                        </div>


                    </div>
                    <div className="phone-num">
                        <img src={call} alt="callus" />
                     <a href="https://wa.me/918368094183"><p>+918368094183</p> </a> 
                    </div>
                    <div className="loc">
                        <img src={location} alt="location" />
                        <a href="https://maps.app.goo.gl/NzwyswdzBi1CNzeJ7"><p>Sultanpuri,New Delhi</p></a>
                    </div>
                </div>
                <div className="right">
                    <div className="right-c">
                        <form onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="name">Name:</label><br></br>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    name="name"
                                  
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <br />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    name="email"
                                  
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                 <br />
                                <textarea
                                 placeholder="Enter your message"
                                    id="message"
                                    name="message"
                                  
                                    required
                                ></textarea>
                            </div>
                            <button type="submit  " className="btn " data-type="button_gr">Submit</button>
                        </form>
                    </div>
                    {
                   console.log(result)

                    }

                </div>
            </div>
        </div>
    )
}

export default Contact
