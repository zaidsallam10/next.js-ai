import React from "react";
import Nav from "./Nav";
import Head from "next/head";
import Footer from "./Footer";

const layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>AI Intro Using Next.js</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossorigin="anonymous"
        />
      </Head>
      <Nav />
      {children}
      {/* <Footer /> */}
      {/* <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div> */}
    </div>
  );
};

export default layout;
