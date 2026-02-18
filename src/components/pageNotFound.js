import TopBar from "./topBar";
import React from "react";
import Header from "./headers";
import Footer from "./footer";

function PageNotFound() {
  return (
    <>
      <TopBar />
      <Header />
      <div className="page-not-found">
        <div className="text-center">
          <h1 className="">404</h1>
          <p>Sorry, the page you were looking for could not be found.</p>
          <p>
            You can return to our <a href="/" rel="noopener noreferrer">Homepage </a>, or{" "}
            <a href="/contact" rel="noopener noreferrer"
            >Contact</a> us if you can’t find what you are
            looking for
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default React.memo(PageNotFound);
