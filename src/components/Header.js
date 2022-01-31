import React from 'react';
import banner from '../assets/img/banner.jpg';
import '../main.css';

const Header = () => {
  return (
    <div className="c-banner mb-5">
      <img src={banner} alt="" className="c-banner__img" />
      <div className="container">
        <div className="c-banner__content">
          <h1>Rick & Morty API</h1>
          <p>Alejandro Perez</p>
          <p>Welcome to this simple React project where, using the Rick & Morty API, I show all the characters.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

