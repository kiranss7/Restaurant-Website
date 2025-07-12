import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import Banner from '../images/banner.jpeg';

const Home = () => {
  return (
    <Layout>
      <div
        className='home'
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: 'no-repeat', // Add this line
          backgroundSize: 'cover',       // Optionally add this to make the image cover the entire div
        }}
      >
        <div className='headerContainer'>
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to='/menu'>
            <button className='btn'>
              ORDER NOW
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;