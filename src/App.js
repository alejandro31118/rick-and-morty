import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Characters from './components/Characters';
import CharInfo from './components/CharInfo';

const App = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://rickandmortyapi.com/api/character`)

      console.log(result.data.results)
      setItems(result.data.results)
    }
    fetchItems()
  }, [])

  return (
    <main className='c-main'>
      <Header />
      <div className='container'>
        <Characters items={items} />

        <div class="d-grid gap-2">
          <button class="btn btn-purple mb-5" onclick="loadMore( this.getAttribute( 'data-next-page' ) )" data-next-page="1" type="button">Load more</button>
        </div>

      </div>
    </main>
  );
}

export default App;
