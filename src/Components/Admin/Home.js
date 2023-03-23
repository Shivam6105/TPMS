import React, { useState } from "react";

const Home = () => {
  const [showDiv, setShowDiv] = useState(false);
  const handleClick = () => {
    setShowDiv(!showDiv);
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Show Div</button>
      <div>{showDiv && <div>Content to show</div>}</div>
    </div>
  );
};

export default Home;
