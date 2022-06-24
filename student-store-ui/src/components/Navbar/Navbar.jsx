import * as React from "react";
import "./Navbar.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <div className="link">
        <a hhref="/" className="link">
          Home
        </a>
        <a href="/About" className="link">
          About
        </a>
        <a href="/" className="link">
          Buy Now
        </a>
      </div>
    </nav>
  );
}
