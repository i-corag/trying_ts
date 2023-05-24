"use strict";
(() => {
    const login = (data) => {
        console.log(data.email, data.password);
    };
    login({
        email: 'ivana@ivana.com',
        password: 1234
    });
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
