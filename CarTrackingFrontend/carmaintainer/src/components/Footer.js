import React from "react";
import wrench from "../components/images/wrench.png";


const Footer = () => {
  return(
 
    <footer className="footer">
      <div className="text-center mb-5">
    <img src={wrench} className="footerimg" alt="wrench">
    </img>
    </div>
  </footer>

)
}
export default Footer;