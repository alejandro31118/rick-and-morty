import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../assets/img/banner.jpg';
  
const Home = () => {
  return (
    <main class="c-main">
    
    <div class="c-banner mb-5">
      <img src={Banner} alt="" class="c-banner__img" />
      <div class="container">
        <div class="c-banner__content">
          <h1>Rick And Morty API</h1>
          <p>Welcome to this simple project where, using the Rick & Morty API, I show all the characters, with a button in charge of loading more characters and the functionality of, when clicking on a character, loading a modal with all its information.</p>
          <p>This project has been created in order to better understand how it works in asynchronism, promises, Async / Await and fetch.</p>
        </div>
      </div>
    </div>

  </main>
  );
};
  
export default Home;