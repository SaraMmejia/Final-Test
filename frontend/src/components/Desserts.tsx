import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

function Desserts() {
  const [desserts, setDesserts] = useState<any[]>([]);
  const getDataDesserts = async () => {
    const result = await axios('http://api.adfoodio.site/desserts');
    setDesserts(result.data);
  };

  useEffect(() => {
    getDataDesserts();
  }, []);

  return (
    <>
      <div className="container-cards">
        <div className="name-list">
          <h2 className="Main-main">Desserts</h2>
        </div>
        {desserts.map(({ id, title, url, price, count }) => (
          <Card
            key={id}
            id={id}
            title={title}
            url={url}
            price={price}
            count={count}
            type={'desserts'}
            hasChanged={() => {}}
          />
        ))}
      </div>
    </>
  );
}
export default Desserts;
