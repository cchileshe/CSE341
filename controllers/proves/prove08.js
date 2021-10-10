const fs = require('fs');
const path = require('path');
const ITEMS_PER_PAGE = 9;
var counter = 0;
let products = [];
let searchProducts = [];
let searched = false;
const p = path.join(
    path.dirname(require.main.filename),
    'models',
    'prove08.json'
);
exports.getProve08 = (req, res, next) => {
    let page = req.query.page;
    //console.log(page);
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log('Couldn\'t read JSON');
            return [];
        } else {
            products = JSON.parse(fileContent);
            // console.log(products);
        }
    });

    
    let dividedArray = [];
    let arrayOfTen = [];
    for (let page of products) {
        arrayOfTen.push(page);
        counter = counter + 1;
        if (counter === 10) {
           
            dividedArray.push(arrayOfTen);
            arrayOfTen = [];
            counter = 0;
        }
    }

    
    
    if (page === undefined){
        page = 1;
    }
    let nextpage = Number(page) + 1;
    let previouspage = Number(page) - 1;
    res.render('pages/prove08/prove08', {
        title: 'Team Activity 03',
        path: '/ta03',
        products: dividedArray[page],
        searchProducts: searchProducts,
        searched: searched,
        next: nextpage,
        previous: previouspage
    });
    searched = false;
    searchedProducts = [];
};