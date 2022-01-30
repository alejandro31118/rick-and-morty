import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Characters from './components/Characters';
import Search from './components/Search';
import CharInfo from './components/CharInfo';

const App = () => {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  /*const loadMore = () => {
    https://stackoverflow.com/questions/69802728/fetch-rick-and-morty-api
  }*/
  const loadMore = (event) => {
    event.preventDefault()
    setPage(page + 1)
  }

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://rickandmortyapi.com/api/character?page=${page}&name=${query}`)

      console.log(result.data.results)
      setItems(result.data.results)
    }
    fetchItems()
  }, [query, page])

  return (
    <main className='c-main'>
      <Header />
      <div className='container'>
        <Search getQuery={(q) => setQuery(q)} />
        <Characters items={items} />

        <div class="d-grid gap-2">
          <button class="btn btn-purple mb-5" onClick={(event) => loadMore(event)} type="button">Load more</button>
        </div>

      </div>
    </main>
  );
}

export default App;
