//footer, only displaying on landing page, has a link to my personal website as well
import React from "react";
import "./footer.css"; 
const footer = () => (
  <div className="footer">
       <p style={{ textAlign: "center", fontSize:"25px" }}>
       Made with ❤️ and ☕️ by <a href="https://shambhavir.github.io/">Shambhavi Ramaswamy.</a>
        </p>
  </div>
);
export default footer;
