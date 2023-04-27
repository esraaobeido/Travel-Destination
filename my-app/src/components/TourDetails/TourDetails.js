import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useParams } from 'react-router-dom';
import './TourDetails.css';
const data = require('./../../data/db.json');

function TourDetails(props) {
  const { id } = useParams();
  const result = data.filter(t => t.id === id)[0];
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <>
      <Header />
      <div className='details'>
        <h2>{result.name}</h2>
        <img src={result.image} alt={result.id} />
        <p>City ID: {id}</p>
        <p>Description of tour: </p>
        <p className="description">
          {showFullText ? result.info : `${result.info.slice(0, 60)}...`}
        </p>
        <div className="toggle-description">
        <button onClick={toggleText}>
          {showFullText ? 'See Less' : 'See More'}
        </button>
        <p>Price of tour: {result.price}$</p>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default TourDetails;
