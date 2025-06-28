import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import Banner from '../images/banner.jpg';
import '../styles/HomeStyles.css';
import '../pages/Contact.js'





const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
      <div className='headerContainer'>
      <h1>E-Gadget Website</h1>
      <p>Best E-Gadgets In Nepal</p>
      <Link to='/menu'>
      <button>
        ORDER NOW
      </button>
      </Link>
      </div>

      </div>
      
    
    </Layout>
    
  )
}

export default Home
