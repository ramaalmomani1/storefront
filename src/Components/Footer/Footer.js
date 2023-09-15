import { Link } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-items">
        <h3>Contact us</h3>

        <ul>
          <li>
            <i className="fa fa-phone" aria-hidden="true"></i>&nbsp; (06) 400
            0755
          </li>
          <li>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            &nbsp; store.store@gmail.com
          </li>
        </ul>
      </div>

      <div className="footer-bottom">Copyright &copy; OUR STORE 2023</div>
    </footer>
  );
}
