import React from "react";

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#f5f5f5", padding: "10px" }}>
      <ul style={{ display: "flex", justifyContent: "center", listStyle: "none" }}>
        <li style={{ marginRight: "20px" }}>
          <a href="/">Home</a>
        </li>
        <li style={{ marginRight: "20px" }}>
          <a href="/profile">Profile</a>
        </li>
        <li style={{ marginRight: "20px" }}>
          <a href="/about">About</a>
        </li>
        <li style={{ marginRight: "20px" }}>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
