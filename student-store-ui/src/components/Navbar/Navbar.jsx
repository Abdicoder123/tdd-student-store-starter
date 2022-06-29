import * as React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo className="logo" />
      <ul className="link">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <a href="/#AboutUs"> About Us </a>
        </li>
        <li>
          <a href="/#ContactUs"> Contact Us here </a>
        </li>
        <li>
          <a href="/#BuyNow"> Buy Now!</a>
        </li>
      </ul>
    </nav>
  );
}
