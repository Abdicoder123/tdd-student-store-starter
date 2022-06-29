import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="NotFound">
      <Navbar />
      <Sidebar />
      <p>Product Notfound</p>
    </div>
  );
}
