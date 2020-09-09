import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Card({ count, url, title, price, id, type, hasChanged }: IMainsProp) {
  const [countLocal, setCountLocal] = useState(count);

  const handleAddClick = (): void => {
    modifyCount(countLocal + 1);
  };

  const handleRemoveClick = (): void => {
    if (countLocal > 0) {
      modifyCount(countLocal - 1);
    }
  };

  const modifyCount = async (countToModify: number) => {
    await axios.patch(`http://api.adfoodio.site/${type}/${id}`, {
      count: countToModify,
    });
    setCountLocal(countToModify);
  };

  useEffect(() => {
    hasChanged();
  }, [countLocal]);

  return (
    <div className="card-avo">
      <img src={url} className="avo-image" alt={title} />
      <div className="avo-texts">
        <div className="avo-title">
          <h5 className="title-food">{title}</h5>
        </div>
        <div className="avo-price">
          <h4 className="price-food"> ${price}</h4>
          <div className="bottons-price">
            <div className="bottons-card">
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg"
                onClick={handleAddClick}
              >
                Add
              </button>
              <button
                type="button"
                className="btn btn-outline-secondar"
                onClick={handleRemoveClick}
              >
                Remove
              </button>
            </div>
            <div className="count-card">
              <span>{countLocal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

interface IMainsProp {
  id: string;
  title: string;
  url: any;
  price: number;
  count: number;
  type: string;
  hasChanged: Function;
}
