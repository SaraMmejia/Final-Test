import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

function InitialPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/mains">
          <button className="btn btn-primary mg-5">Menu</button>
        </Link>
      </header>
    </div>
  );
}

export default InitialPage;
