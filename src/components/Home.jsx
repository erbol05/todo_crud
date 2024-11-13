import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  return (
    <div className="container">
      <h1 onClick={() => nav("/")}>hello</h1>
    </div>
  );
};

export default Home;
