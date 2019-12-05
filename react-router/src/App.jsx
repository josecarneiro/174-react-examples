import React from 'react';
import { Component } from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import { NativeRouter, Switch, Route } from 'react-router-native';

import HomeView from './views/HomeView';
import FeaturesView from './views/FeaturesView';
import ProductView from './views/ProductView';

class App extends Component {
  constructor() {
    super();
    console.log(new Date());
  }

  render() {
    return (
      <BrowserRouter>
        <header>
          <p>Sample App</p>

          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/product/a">Product A</Link>
          <Link to="/product/b">Product B</Link>
        </header>

        <main>
          <Switch>
            <Route path="/product/:name" component={ProductView} />
            <Route path="/features" component={FeaturesView} />
            <Route path="/" component={HomeView} />
          </Switch>

          {/* <HomeView />
        <FeaturesView /> */}
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
