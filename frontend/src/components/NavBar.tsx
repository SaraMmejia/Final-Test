import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faGlassMartiniAlt,
  faIceCream,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <div className="navbar ">
      <nav className="navbar navbar-expand-lg navbar-block fixed-top">
        <div className="head-top">
          <div className="logo-food">
            <img
              src={'images/Adfoodio.png'}
              className="navbar-brandAF"
              alt={'addFodioLogo'}
            />
          </div>
          <div className="cart">
            <Link to="/shoppingCart">
              <FontAwesomeIcon icon={faShoppingCart} className="shoppingCart" />
            </Link>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <div className="container-icon">
                <Link to="/mains">
                  <FontAwesomeIcon icon={faUtensils} className="icones" />
                </Link>
              </div>
              <a className="nav-link" href="/mains">
                Mains <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <div className="container-icon">
                <Link to="/drinks">
                  <FontAwesomeIcon
                    icon={faGlassMartiniAlt}
                    className="icones"
                  />
                </Link>
              </div>
              <a className="nav-link" href="/drinks">
                Drinks
              </a>
            </li>
            <li className="nav-item">
              <div className="container-icon">
                <Link to="/desserts">
                  <FontAwesomeIcon icon={faIceCream} className="icones" />
                </Link>
              </div>
              <a className="nav-link" href="/desserts">
                Desserts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
