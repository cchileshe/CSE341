
const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('/search', {
      title: 'Team Activity 03',
      path: '/search',
      products: products,
    });
  });
};

exports.getSearchProducts = (req, res, next) => {
  const query = req.query.query.toLowerCase();
  Product.search(query, (filterProducts) => {
    res.render('pages/search', {
      title: 'Team Activity 03',
      path: '/search',
      products: filterProducts,
    });
  });
};