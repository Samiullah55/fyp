import React from "react";
import "../styles/Foter.css";
export const Footer = () => {
  return (
    <>
      <div className=" footer mt-5">
        <div class="p-3 mb-2 bg-dark text-white mt-5">
          <div className="container">
            <div className="col-sm 3">
              <h5>Find Us</h5>
              <ul>
                <li>FaceBook</li>
                <li>LinkedIn</li>
                <li>Email</li>
              </ul>
            </div>
            <div className="col-sm 3">
              <h5 pl-3>Quick Links</h5>
              <ul>
                <li>
                  <a href="https://www.mocc.gov.pk/ProjectDetail/M2QzOWJmMjUtZTU3MC00NmFkLWE4YmMtZDFhMmRlOGU2NGRh">
                    10 Billion Tree Tsunami Program{" "}
                  </a>
                </li>
                <br />
                <li>
                  <a href="https://epd.punjab.gov.pk/">
                    Environment Protection Department, Punjab
                  </a>
                </li>
                <br />
                <li>
                  <a href="https://bepa.gob.pk/">
                    {" "}
                    Environmental Protection Agency, Balochistan
                  </a>{" "}
                </li>
                <br />
                <li>
                  <a href="https://epakp.gov.pk/">
                    Environment Department, Khyber Pakhtunkhwa
                  </a>
                </li>
                <br />
              </ul>
            </div>
            <div className="col-sm 3">
              <h5>Get in Touch</h5>
              <form>
                <div class="form-group">
                  <a href="//">FaceBook</a>
                </div>
                <br />
                <div class="form-group">
                  <a href="//">LinkedIn</a>
                </div>
                <br />
                <div class="form-group">
                  <a href="//">Email</a>
                </div>
                <br />
              </form>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </>
  );
};
