import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Characters from './components/Characters';
import Search from './components/Search';

const App = () => {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const scrollToTop = () => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth'
    });
  }

  const nextPage = (event) => {
    event.preventDefault()
    setPage(page + 1)
    scrollToTop()
  }

  const prevPage = (event) => {
    event.preventDefault()
    setPage(page - 1)
    scrollToTop()
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

        <div className='row d-grid gap-2 justify-content-center'>
          <ul className="pagination">
            <li className="page-item btn btn-purple mb-5 col-5">
              <a onClick={(event) => prevPage(event)}>Previous</a>
            </li>
            <li className="page-item btn btn-purple mb-5 mx-2"><a>{page}</a></li>
            <li className="page-item btn btn-purple mb-5 col-5">
              <a onClick={(event) => nextPage(event)}>Next</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
