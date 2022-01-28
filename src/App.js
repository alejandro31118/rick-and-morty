import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Character from './components/Character';

const App = () => {
  const [items, setItems] = useState([])
  //const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://rickandmortyapi.com/api/characters`)

      console.log(result.data)
      setItems(result.data)
      //setIsLoading(false)
    }
    fetchItems()
  }, [])

  return (
    <div className='container'>
      <Header />
      <Character items={items} />
    </div>
  );
}

export default App;
