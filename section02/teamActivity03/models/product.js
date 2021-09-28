const fs = require('fs');

// Using node-fetch
const fetch = require('node-fetch');
const productsUrl =
  'https://byui-cse.github.io/cse341-course/lesson03/items.json';

module.exports = class Product {
  static fetchAll(cb) {
    fetch(productsUrl)
      .then((res) => res.json())
      .then((products) => {
        cb(products);
      })
      .catch((err) => console.log(err));
  }

  static search(query, cb) {
    fetch(productsUrl)
      .then((res) => res.json())
      .then((products) => {
        
        const filterProducts = products.filter((product) => {
          
          let tagFound = false;
          product.tags.forEach((tag) => {
            if (tag.toLowerCase().includes(query)) tagFound = true;
          });

          return (
            tagFound ||
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
          );
        });

        cb(filterProducts);
      })
      .catch((err) => console.log(err));
  }
};