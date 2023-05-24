"use strict";
(() => {
    let productTitle = 'My product';
    let productDescription = 'My product description';
    let productPrice = 100;
    let isNew = false;
    const summary = `
  puede manejar multiple lineas
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `;
    console.log(summary);
})();
