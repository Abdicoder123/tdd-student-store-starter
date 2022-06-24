import * as React from "react";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="home">
      <div className="home-wrapper">
        <Hero />
      </div>
      <SubNavbar setInput={props.setInput} setCategory={props.setCategory} />
    </div>
  );
}
