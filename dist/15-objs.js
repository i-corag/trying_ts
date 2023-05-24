"use strict";
(() => {
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'producto 1',
        createdAt: new Date(),
        stock: 45,
        size: 'M',
    });
    console.log(products);
})();
