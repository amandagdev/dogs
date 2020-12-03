import React from 'react';
import './styles.css';

const Home = () => {
  function confirmEnding(str, target) {
    console.log(str.length - target.length)
    console.log(target.length)
    return console.log(str.substring(str.length - target.length) === target);
  }

  confirmEnding('He has to give me a new name', 'name');

  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
