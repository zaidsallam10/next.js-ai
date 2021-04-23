import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function about() {
  return (
    <div>
      <br />
      <h3>
        This is an Introduction for the most important AI fields and
        applications using Next.js framework
      </h3>
      <br />
      <h3>Why Next.js?</h3>
      <br />

      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Very easy routing, no need for configuration
          </li>
          <li class="list-group-item">
            Very good for SEO, since it loads the index.html and the meta-data
          </li>
          <li class="list-group-item">Dynamic Server side rendering</li>
        </ul>
        <div class="card-footer">CSS, webpack, SCSS, Typescript supported</div>
      </div>
      <br />

      <div>
        {/* <img src="/zaid.jpeg" class="card-img-top" alt="..." /> */}
        <Image
          src="/zaid.jpeg"
          //   className="card-img-top"
          width="150"
          height="200"
        />
        <div class="card-body">
          <p class="card-text">
            Prepared by Zaid Sallam - zaidsallam2017@gmail.com
            <br />
            LinkedIN:
            <br />
            <a href="https://www.linkedin.com/in/zaid-sallam/">
              {" "}
              https://www.linkedin.com/in/zaid-sallam/
            </a>
          </p>
        </div>
      </div>

      <br />
    </div>
  );
}

export default about;
