import React from "react";

function App() {
  return (
    <div>
      {/* Your React app content goes here */}
      <h1 className="text-5xl text-center font-semibold pt-20">
        Hello React World! This is now a React app.
      </h1>

      {/* Attribute this challenge to yourself! */}
      <div className="credits">
        A challenge by{" "}
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
          rel="noopener noreferrer"
        >
          GreatFrontEnd Projects
        </a>
        . Built by{" "}
        <a
          href="https://www.greatfrontend.com/u/your_username"
          target="_blank"
          rel="noopener noreferrer"
        >
          Your Name
        </a>
        .
      </div>
    </div>
  );
}

export default App;
