"use strict";
(() => {
    function createProductToJson(title, createdAt, //no hay alert con Date
    stock, size) {
        return {
            title,
            createdAt,
            stock,
            size,
        }; //el retorno ya queda tipado
    }
    const product1 = createProductToJson('P1', new Date(), 12, 'XL');
    console.log(product1);
    console.log(product1.title);
    const createProductToJsonV2 = (title, createdAt, //no hay alert con Date
    stock, size) => {
        return {
            title,
            createdAt,
            stock,
            size,
        }; //el retorno ya queda tipado
    };
    const product2 = createProductToJsonV2('P1', new Date(), 12);
    console.log(product2);
    console.log(product2.title);
})();
