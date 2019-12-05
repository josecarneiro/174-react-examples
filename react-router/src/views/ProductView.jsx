import React, { Component } from 'react';

import { loadProduct } from './../services/product';
// import loadProduct from './../services/product';

class ProductView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      information: null
    };

    this.fetchData();
  }

  componentDidUpdate(previousProps, previousState) {
    const currentProductName = this.props.match.params.name;
    const previousProductName = previousProps.match.params.name;
    if (currentProductName !== previousProductName) {
      this.fetchData();
    }
  }

  fetchData() {
    const productName = this.props.match.params.name;

    loadProduct(productName)
      .then(information => {
        this.setState({
          information: information
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const productName = this.props.match.params.name;
    const information = this.state.information;
    return (
      <div>
        <p>You're at the product {productName} view!</p>
        {information && (
          <div>
            <strong>{information.title}</strong>
            <small>{information.price}</small>
          </div>
        )}
      </div>
    );
  }
}

export default ProductView;
