import React from "react";
import { Link } from "react-router-dom";
import swiggy from "../Images/swiggy.png";
import linkedin from "../Images/linkedin.png";
import instagram from "../Images/instagram.png";
import github from "../Images/github.png";
import globe from "../Images/globe.png";
const style = {
  color: {
    backgroundColor: "#02060C",
  },
};
const Footer = () => {
  return (
    <div className=" text-white p-10" style={style.color}> 
      <div className="flex flex-wrap justify-around">
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={swiggy} alt="swiggy" className="h-7 mr-2" />
            <div className="text-3xl font-bold">Swiggy</div>
          </div>
          <div className="leading-loose my-4">
            &copy; 2023 Swiggy Clone by Nikitha
          </div>
          <div className="flex justify-around">
            <Link target='_blank' to="https://www.linkedin.com/in/nikithasundaran/">
              <img src={linkedin} alt="linkedin" className="w-7 h-7" />
            </Link>
            <Link target='_blank' to="https://github.com/Nikitha-Sundaran">
              <img src={github} alt="github" className="w-7 h-7" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col p-14">
          <h1 className="text-xl font-bold leading-loose">Company</h1>
          <p className="leading-loose">About</p>
          <p className="leading-loose">Careers</p>
          <p className="leading-loose">Team</p>
          <p className="leading-loose">Swiggy One</p>
          <p className="leading-loose">Swiggy Instamart</p>
          <p className="leading-loose">Swiggy Genie</p>
        </div>
        <div className="flex flex-col p-14">
          <div>
            <h1 className="text-xl font-bold leading-loose">Contact us</h1>
            <p className="leading-loose">Help & Support</p>
            <p className="leading-loose">Partner with us</p>
            <p className="leading-loose">Ride with us</p>
          </div>
          <div className="flex flex-col mt-10">
            <h1 className="text-xl font-bold leading-loose">Legal</h1>
            <p className="leading-loose">Terms & Conditions</p>
            <p className="leading-loose">Cookie Policy</p>
            <p className="leading-loose">Privacy Policy</p>
          </div>
        </div>
        <div className="flex flex-col p-14">
          <h1 className="text-xl font-bold leading-loose">We deliver to:</h1>
          <p className="leading-loose">Bangalore</p>
          <p className="leading-loose">Chennai</p>
          <p className="leading-loose">Hyderabad</p>
          <p className="leading-loose">Delhi</p>
          <p className="leading-loose">Mumbai</p>
          <p className="leading-loose">Pune</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
