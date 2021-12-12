import React from "react";
import "./Footer.css";
import Facebook from "../img/Facebook.png";
import Google from "../img/Google.png";
import flickrBlock from "../img/flickrBlock.png";
import twitter from "../img/twitter.png";
import wifi from "../img/wifi.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__blocks">
        <div className="footer__item">
          <div className="footItem__title">SHOPPING WITH US</div>
          <div className="footItem__links">
            <a href="!">why shop with us?</a>
            <a href="!">how it works</a>
            <a href="!">delivery</a>
            <a href="!">returns</a>
            <a href="!">where's my order</a>
            <a href="!">contact & help</a>
            <a href="!">wedding list</a>
            <a href="!">wish lists</a>
            <a href="!">gift vounchers</a>
          </div>
        </div>

        <div className="footer__item">
          <div className="footItem__title">ABOUT US</div>
          <div className="footItem__links">
            <a href="!">our story</a>
            <a href="!">customer contact</a>
            <a href="!">awards</a>
            <a href="!">press centre</a>
            <a href="!">work with us</a>
            <a href="!">terms & conditions</a>
            <a href="!">privacy & cookies</a>
          </div>
        </div>

        <div className="footer__item">
          <div className="footItem__title">SELLING WITH US</div>
          <div className="footItem__links">
            <a href="!">why join?</a>
            <a href="!">fags</a>
            <a href="!">apply to sell with us</a>
            <a href="!">affiliates</a>
          </div>
        </div>

        <div className="footer__item">
          <div className="footItem__title">SIGNUP NEWSLETTER</div>
          <div className="subscribe">
            <div className="email">e.g.: abc@domain.com</div>
            <div className="subNow">subscribe now</div>
          </div>
          <div className="social">
            <div className="social__title">KEEP IN TOUCH</div>
            <div className="social__icons">
              <div className="socIcon__item wifi">
                <a href="!">
                  {" "}
                  <img src={wifi} alt="img" />
                </a>
              </div>
              <div className="socIcon__item facebook">
                <a href="!">
                  {" "}
                  <img src={Facebook} alt="img" />
                </a>
              </div>
              <div className="socIcon__item twitter">
                <a href="!">
                  {" "}
                  <img src={twitter} alt="img" />
                </a>
              </div>
              <a href="!">
                {" "}
                <img src={flickrBlock} alt="!" />
              </a>
              <div className="socIcon__item google">
                <a href="!">
                  <img src={Google} alt="img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copyright__text">
          Copyright © 2014 Gift Shop, All right reserved
        </div>
        <div className="copyright__autor">
          Designed by <span>Amysxain</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
