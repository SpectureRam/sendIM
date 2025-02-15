import React from 'react'
import Navbar from './Navbar';
import H1 from './components/H1';
import H2 from './components/H2';
import Footer from '../Footer/Footer';
import H3 from './components/H3';
import H4 from './components/H4';
import H5 from './components/H5';

const Home = () => {
  return (
    <>
    <Navbar/>
      <div>
        <H1/>
        <H2/>
        <H5/>
        <H3/>
      </div>
      <Footer/>
    </>
  )
}

export default Home;