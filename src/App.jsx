import React, { useState } from "react";
import "./style.css";
import bg from "./assets/logistic.png";
import logisticImage from "./assets/logistic1.png";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after a delay
    setTimeout(() => setSubmitted(false), 3000);
  };

  


  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">Ellipsis Technologies</a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home" style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero-text">
          <h1>Ellipsis Technologies</h1>
          <p>Empowering logistics through smart software solutions.<br />
             Making your supply chain smarter and smoother.</p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-image" style={{ backgroundImage: `url(${logisticImage})` }}></div>
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Ellicargo is a forward-thinking software company dedicated to transforming the logistics industry.
              Our mission is to simplify and automate supply chain processes through cutting-edge digital tools tailored to your business needs.<br /><br />
              With a deep understanding of logistics workflows, we create intelligent solutions for shipment tracking, warehouse optimization, route planning, and data-driven decision-making.<br /><br />
              Let technology drive your logistics forward — the smart way.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-boxes">
          <div className="service">
            <h3>Logistics Automation</h3>
            <p>We build tools to automate your logistics operations.</p>
          </div>
          <div className="service">
            <h3>Tracking Solutions</h3>
            <p>Real-time shipment and inventory tracking systems.</p>
          </div>
          <div className="service">
            <h3>Analytics & Reports</h3>
            <p>Dashboards and insights to grow your logistics business.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <form 
        action="https://formspree.io/f/mwpbnrzv" 
        method="POST"
        >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="phone" placeholder="Phone Number" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
        </form>
      </section>
      


      {/* Footer */}
      <footer>
        <p><strong>Ellicargo</strong> – Logistics Simplified</p>
        <p>Email: info@ellicargo.com | Phone: +91-8850613151</p>
      </footer>
    </>
  );
}

export default App;
