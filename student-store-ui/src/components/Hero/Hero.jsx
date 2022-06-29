import * as React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="heroItems">
        <div className="intro">
          Welcome!
          <h1 className="merch">Find your merch!</h1>
          <h2 className="intromsg">
            We have a lot of products, click around to find the right one.
          </h2>
        </div>
        <img
          className="hero-img"
          src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
        />
      </div>
    </div>
  );
}
