import React from "react";
import "./Contact.css";
import Logo_1 from "../../assests/Logo_1.png";
import { ImWhatsapp } from "react-icons/im";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SiInstagram } from "react-icons/si";

import { useRef } from "react";
import IMG from "./me-about.jpg";
import ReactWhatsapp from "react-whatsapp";

const Contact = () => {
  function gotowhatsapp() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var url =
      "https://wa.me/918789529215?text=" +
      "Name: " +
      name +
      "%0a" +
      "Phone: " +
      phone +
      "%0a" +
      "Email: " +
      email +
      "%0a" +
      "Service: " +
      message;

    window.open(url, "_blank").focus();
  }
  const mystyle = {
    position: "fixed",
    width: "50px",
    height: "50px",
    bottom: "70px",
    right: "120px",
    color: " white",
  };
  function gotowhatsapp() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var url =
      "https://wa.me/7019622523?text=" +
      "Name: " +
      name +
      "%0a" +
      "Phone: " +
      phone +
      "%0a" +
      "Email: " +
      email +
      "%0a" +
      "Message: " +
      message;

    window.open(url, "_blank").focus();
  }

  return (
    <section id="contact">
      <div className="header">
        <div className="heading">
          Get In Touch
          <h5>Need some beautiful captures ? Lets work together</h5>
        </div>
        <div className="logo">
          <img src={Logo_1} alt="prasas_photography" />
        </div>
      </div>
      <div className="contacting">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IMG} alt="About_image" />
          </div>
        </div>

        <div className="container contact__container">
          <div className="innercomp">
            <div className="forming">
              <form onSubmit={gotowhatsapp} action=" ">
                <input
                  className="fields"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
                <input
                  className="fields"
                  id="phone"
                  type="text"
                  name="name"
                  placeholder="Your contact number"
                  required
                />
                <input
                  className="fields"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
                <input className="submiting" type="submit" value="send" />
              </form>
            </div>
            <div className="contact__options">
              <article className="contact__option">
                <a
                  href="https://wa.me/918789529215?text=Hi%20There!"
                  className="contact__option-icon"
                >
                  <ImWhatsapp size={30} />
                </a>
              </article>
              <article className="contact__option">
                <a
                  className="contact__option-icon"
                  style={{ color: "white" }}
                  href="https://www.instagram.com/prasad_photography00/?igshid=YmMyMTA2M2Y="
                  target="__blank"
                >
                  <SiInstagram size={30} />
                </a>
              </article>
              <article className="contact__option">
                <a
                  className="contact__option-icon"
                  style={{ color: "white" }}
                  href="mailto:prasadphotography523@gmail.com"
                  target="__blank"
                >
                  <MdOutlineMarkEmailUnread size={30} />
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default Contact;
