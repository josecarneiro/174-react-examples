import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function Navbar(props) {
  const pathname = props.location.pathname;
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/features">Features</Link>
      <Link to="/product/a">Product A</Link>
      <Link to="/product/b">Product B</Link>
      <Link to="/pricing">Pricing</Link>
      <span>Current route: {pathname}</span>
    </nav>
  );
}
