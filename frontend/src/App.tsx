import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import InitialPage from './components/InitialPage';
import Mains from './components/Mains';
import Drinks from './components/Drinks';
import Desserts from './components/Desserts';
import NavBar from '../src/components/NavBar';
import Slider from '../src/components/Slider';
import FooterTest from './components/Footer';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Slider />
        <Switch>
          <Route exact path="/" component={InitialPage} />
          <Route exact path="/mains" component={Mains} />
          <Route exact path="/drinks" component={Drinks} />
          <Route exact path="/desserts" component={Desserts} />
          <Route exact path="/shoppingCart" component={ShoppingCart} />
        </Switch>
        <FooterTest />
      </Router>
    </div>
  );
}

export default App;
