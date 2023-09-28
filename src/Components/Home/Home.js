import React, {useState} from 'react'
import './home.css';
import Banner from './Banner';
import Search from '../Search/Search';
import BookListing from '../Books/BookListing';

function Home() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  return (
    <section className='home'>
      <Banner/>
      <Search setSearch={setSearch} search={search} books={books} setBooks={setBooks}/>
      <BookListing books={books} setBooks={setBooks} />
    </section>
  )
}

export default Home