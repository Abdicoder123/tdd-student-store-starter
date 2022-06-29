import * as React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="Contact" className="contact">
      <div className="content">
        <a id="ContactUs">
          <h3>Contact Us</h3>
        </a>
        <div className="summary">
          <ul className="info">
            <li>
              <span className="label">Email :</span>
              <span> code@path.org</span>
            </li>
            <li>
              <span className="label">Phone :</span>
              <span> 1-800-C899898</span>
            </li>
            <li>
              <span className="label">Address :</span>
              <span>612 Mean Ave, San Francisco, CA</span>
            </li>
          </ul>
          {/* <div className="media">
            <img
              alt="codepath"
              src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
