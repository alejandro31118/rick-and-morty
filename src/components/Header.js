import React from 'react';
import banner from '../assets/img/banner.jpg';
import '../main.css';

const Header = () => {
  return (
    <div className="c-banner mb-5">
      <img src={banner} alt="" className="c-banner__img" />
      <div className="container">
        <div className="c-banner__content">
          <h1>Rick And Morty API</h1>
          <p>Welcome to this simple project where, using the Rick & Morty API, I show all the characters, with a button in charge of loading more characters and the functionality of, when clicking on a character, loading a modal with all its information.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

