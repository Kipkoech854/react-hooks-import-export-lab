// src/components/Home.js

import React from "react";
import { username, city } from "./information.js"; // adjust the path if needed

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
