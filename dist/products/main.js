"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.addProduct)({
    title: 'producto 1',
    createdAt: new Date(1993, 1, 1),
    stock: 45,
    size: 'M',
});
(0, product_service_1.addProduct)({
    title: 'producto 2',
    createdAt: new Date(1998, 5, 7),
    stock: 35,
    size: 'XL',
});
console.log(product_service_1.products);
const total = (0, product_service_1.calcStock)();
console.log(total);
