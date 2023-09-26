import React from 'react'
import './home.css';
import Banner from './Banner';
import Search from '../Search/Search';

function Home() {
  return (
    <section className='home'>
      <Banner/>
      <Search/>
    </section>
  )
}

export default Home