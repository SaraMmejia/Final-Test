import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Mains.css';
import Card from './Card';

function Mains() {
  const [mains, setMains] = useState<any[]>([]);

  const getDataMains = async () => {
    const result = await axios('http://api.adfoodio.site/mains');
    setMains(result.data);
  };

  useEffect(() => {
    getDataMains();
  }, []);

  return (
    <>
      <div className="name-list">
        <h2 className="Main-main">Mains</h2>
      </div>
      <div className="container-cards">
        {mains.map(({ id, title, url, price, count }) => (
          <Card
            key={id}
            id={id}
            title={title}
            url={url}
            price={price}
            count={count}
            type={'mains'}
            hasChanged={()=>{}}
          />
        ))}
      </div>
    </>
  );
}

export default Mains;
