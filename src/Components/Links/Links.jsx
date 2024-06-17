import React from "react";

export default function Links() {
  return (
    <div>
      <div style={{}}>
        <div
          style={{
            position: "absolute",
            zIndex: "7",
            width: "100%",
            height: "238px",
            backgroundColor: "#91DDCF",
            listStyleType: "none",
            cursor: "pointer",
            gap: "60px",
            display: "flex",
          }}
        >
          <h3 style={{ marginLeft: "90px", width: "20px" }}>About</h3>
          <ul
            style={{
              listStyleType: "none",
              marginTop: "70px",
              position: "absolute",
              marginLeft: "40px",
              color: "black",
            }}
          >
            <li href="hello">Contact us</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Flipkartstories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
          <h3 style={{ marginLeft: "80px" }}>Group Companies</h3>
          <ul
            style={{
              listStyleType: "none",
              marginTop: "80px",
              position: "absolute",
              marginLeft: "320px",
              color: "black",
            }}
          >
            <li>Myntra</li>
            <li>Flikart Wholesale</li>
            <li>Cleartrip</li>
            <li>Shortify</li>
          </ul>

          <h3 style={{ marginLeft: "80px" }}>Help</h3>
          <ul
            style={{
              listStyleType: "none",
              marginTop: "80px",
              position: "absolute",
              marginLeft: "580px",
              color: "black",
            }}
          >
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FaQ</li>
            <li>Report Infringement</li>
          </ul>

          <h3 style={{ marginLeft: "130px" }}>CONSUMER POLICY</h3>
          <ul
            style={{
              listStyleType: "none",
              marginTop: "70px",
              position: "absolute",
              marginLeft: "860px",
              color: "black",
            }}
          >
            <li>Cancellation & Returns</li>
            <li>Terms of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grieviance Redressal</li>
            <li>EPR Compilance</li>
          </ul>

          <h3 style={{ marginLeft: "130px" }}>MAIL US</h3>
          <ul
            style={{
              listStyleType: "none",
              marginTop: "70px",
              position: "absolute",
              marginLeft: "1160px",
              color: "black",
            }}
          >
            <li>Flipkart Internet Private Limited,</li>
            <li>Buildings Alyssa, Begonia &</li>
            <li>Clove Embassy Tech Village,</li>
            <li>Outer Ring Road, Devarabeesanahalli Village,</li>
            <li>Bengaluru, 560103,</li>
            <li>Karnataka, India</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
