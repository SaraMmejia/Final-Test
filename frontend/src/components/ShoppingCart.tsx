import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

function ShoppingCart() {
  const [listCart, setListCart] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<any[]>([]);

  const getData = async (route: string) => {
    const { data } = await axios(`http://api.adfoodio.site/${route}`);
    const withType = data.map((obj: any) => ({ ...obj, type: route }));
    return withType;
  };

  const getAllData = async () => {
    const mains = await getData('mains');
    const drinks = await getData('drinks');
    const desserts = await getData('desserts');
    const list = [...mains, ...drinks, ...desserts];
    const total = list.reduce((acum, current) => {
      const currentTotal = current.price * current.count;
      return acum + currentTotal;
    }, 0);
    setTotalPrice(total);
    setListCart(list);
  };

  const hasChanged = () => {
    getAllData();
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <div className="container-cards">
        <div className="name-list">
          <h2 className="Main-main">Total</h2>
          {listCart.map(
            ({ id, title, url, price, count, type }) =>
              count > 0 && (
                <Card
                  key={id}
                  id={id}
                  title={title}
                  url={url}
                  price={price * count}
                  count={count}
                  type={type}
                  hasChanged={hasChanged}
                />
              )
          )}
          <h2>Total</h2>
          <h2>{totalPrice}</h2>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;

interface IMainsProp {
  title: string;
  url: any;
  price: number;
  count: number;
  id: any;
}
