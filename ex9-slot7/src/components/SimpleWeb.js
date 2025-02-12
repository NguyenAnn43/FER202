import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function simpleWeb() {
  return (
    <div>
      <header>
        <img
          src="https://www.senviet.art/wp-content/uploads/2021/12/fptulogo.jpg"
          alt="FPT Logo"
        />
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="about">
        <h2>About</h2>
        <p>This is the about section of the website.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>For any inquiries, please contact us at example@example.com.</p>
      </section>

      <footer>© 2023 Website. All rights reserved.</footer>
    </div>
  );
}

export default simpleWeb;
