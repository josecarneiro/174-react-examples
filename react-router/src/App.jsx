import React from 'react';
import { Component } from 'react';

import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
// import { NativeRouter, Switch, Route } from 'react-router-native';

import HomeView from './views/HomeView';
import FeaturesView from './views/FeaturesView';
import ProductView from './views/ProductView';
import PricingView from './views/PricingView';

import Navbar from './components/Navbar';

class App extends Component {
  constructor() {
    super();
    console.log(new Date());
  }

  render() {
    const NavbarWithRouter = withRouter(Navbar);
    return (
      <BrowserRouter>
        <NavbarWithRouter />
        <main>
          <Switch>
            <Route path="/product/:name" component={ProductView} />
            <Route path="/features" component={FeaturesView} />
            {/* <Route path="/pricing" component={PricingView} /> */}
            <Route
              path="/pricing"
              render={props => <PricingView {...props} foo="bar" />}
            />
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
