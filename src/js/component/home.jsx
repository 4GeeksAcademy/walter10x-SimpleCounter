import React from "react";
import StartCounter from "./contador";



//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <StartCounter /> 
      <p>
        Made by <a href="http://www.4geeksacademy.com">Walter Rivero</a>, with
        love!
      </p>
    </div>
  );
};

export default Home;
