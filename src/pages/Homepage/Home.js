import React from "react";
import IMG2 from "../../assests/1.jpg";
import "./home.css";
import prasad_photography from "../../assests/prasad_photography.pdf";
import HeaderSocials from "./HeaderSocials";

function Homepage() {
  return (
    <section className="home">
      <div className="homepage">
        <div className="both">
          <div className="both2">
            <img className="homesideimg" src={IMG2} alt=" " />
          </div>
          <div className="both1">
            <div>
              <h1 className="homehead">
                <h1>PRASAD PHOTOGRAPHY📸</h1>
              </h1>
              <div className="caption">
                <h4 className="captiontext">
                  <br />
                  <span className="homecaption homecaption-9">Tell </span>
                  <span className="homecaption homecaption-10">Me </span>
                  <span className="homecaption homecaption-12">Your</span>
                  <span className="homecaption homecaption-13">Story </span>
                  <br />
                  <span className="homecaption homecaption-1">... </span>
                  <span className="homecaption homecaption-2">And </span>
                  <span className="homecaption homecaption-3">I </span>
                  <span className="homecaption homecaption-8"> Will</span>
                  <span className="homecaption homecaption-4">Tell </span>
                  <span className="homecaption homecaption-5">It </span>
                  <span className="homecaption homecaption-6">Back</span>
                  <span className="homecaption homecaption-7">To </span>
                  <span className="homecaption homecaption-8">You </span>
                  <span className="homecaption homecaption-14">Via </span>
                  <span className="homecaption homecaption-15">
                    Photographs{" "}
                  </span>
                </h4>
              </div>
              <div className="buttons">
                <div className="button1">
                  <a href={prasad_photography} download className="btn">
                    Packages
                  </a>
                </div>
                <div className="button1">
                  <a href="" className="btn">
                    Dive In
                  </a>
                </div>
              </div>
              <HeaderSocials />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
