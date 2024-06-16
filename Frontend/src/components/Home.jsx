
import React from 'react';
import todoimg from '../assets/todoimg.png';
import './homepage.css';

const Home = () => {
  return (
    <div className="not-found-container">
      <img className='image' height={"300px"} width={"400vh"} src={todoimg} />
      <div className="not-found-content">
        <h1 className="not-found-heading">Welcome To the Todo Management Application!</h1>
      </div>
    </div>
  );
};

export default Home;

