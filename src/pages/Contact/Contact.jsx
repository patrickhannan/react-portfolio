import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h2 class="text-center">Contact</h2>
          </div>
          <div class="card-body">
            <h2>Contact Me:</h2>
            <br />
            <p>Phone: (404) 621-1714</p>
            <p>Email:
              <a href="mailto:jpatrickhannan@gmail.com">jpatrickhannan@gmail.com</a>
            </p>
            <p>LinkedIn:
              <a href="https://www.linkedin.com/in/josephpatrickhannanjr">https://www.linkedin.com/in/josephpatrickhannanjr</a>
            </p>
            <p>Github:
            <a href="https://github.com/patrickhannan">https://github.com/patrickhannan</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;