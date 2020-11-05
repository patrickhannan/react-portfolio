import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand ml-3" href="#">Patrick Hannan</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <section class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="./contact">Contact </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./projects">Projects</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </section>
    </nav>
  );
};

export default Header;