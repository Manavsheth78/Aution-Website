import React from "react";
import {Link} from 'react-router-dom'
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4><u>BUY</u></h4>
            <ul className="list-unstyled">
             <Link to="/create" style={{textDecoration:"none"}}>
              <li style={{textDecoration:"none",color:"white"}}>Registration</li>
              </Link>
              <Link to="/abcd" style={{textDecoration:"none"}}>
              <li style={{textDecoration:"none",color:"white"}}>Auctioneer Money Back Guarantee</li>
              </Link>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4><u>Sell</u></h4>
            <ul className="list-unstyled">
              <li>Start Selling</li>
              <Link to="/Learn" style={{textDecoration:"none"}}>
              <li style={{textDecoration:"none",color:"white"}}>Learn to Sell</li>
              </Link>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            
            <h4><u>About us</u></h4>
            
            <ul className="list-unstyled">
            <Link to="/about" style={{textDecoration:"none"}}>
              <li style={{textDecoration:"none",color:"white"}}>Info</li>
              </Link>
              <Link to="/query" style={{textDecoration:"none"}}>
              <li style={{textDecoration:"none",color:"white"}}>Query</li>
              </Link>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Auctioneer | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
