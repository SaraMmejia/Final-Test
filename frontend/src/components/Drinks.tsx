import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Mains.css';
import Card from './Card';

function Drinks() {
  const [drinks, setDrinks] = useState<any[]>([]);

  const getDataDrinks = async () => {
    const result = await axios('http://api.adfoodio.site/drinks');
    setDrinks(result.data);
  };

  useEffect(() => {
    getDataDrinks();
  }, []);

  return (
    <>
      <div className="container-cards">
        <div className="name-list">
          <h2 className="Main-main">Drinks</h2>
        </div>
        {drinks.map(({ id, title, url, price, count }) => (
          <Card
            key={id}
            id={id}
            title={title}
            url={url}
            price={price}
            count={count}
            type={'drinks'}
            hasChanged={()=>{}}
          />
        ))}
      </div>
    </>
  );
}

export default Drinks;
