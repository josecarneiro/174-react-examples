const products = {
  a: {
    title: 'Product A',
    price: '25.99$'
  },
  b: {
    title: 'Product B',
    price: '175.99$'
  }
};

const loadProduct = name => {
  return new Promise((resolve, reject) => {
    const data = products[name];
    resolve(data);
  });
};

// exports.loadProduct = loadProduct;
// exports.listProduct = listProduct;
// export { listProduct };
export { loadProduct };

// module.exports = loadProduct;
export default loadProduct;
