"use strict";
(() => {
    //trabajar de forma inferida
    let productPrice = 100;
    productPrice = 12;
    console.log('Product Price', productPrice);
    //trabajar de forma explicita
    let customerAge = 28;
    customerAge = customerAge + '1'; //error en ts pq no quiere sumar numero y string, pero en js el resultado seria 281
    console.log('Customer Age', customerAge);
    let productInStock;
    console.log('Product In Stock', productInStock); //error la variable esta declarada pero no asignada
    if (productInStock > 10) {
        console.log('more then 10 products');
    }
    let discount = parseInt('jajja'); //OK porque ese parseInt retorna NaN y es parte del conjunto de numbers
    console.log('Discount', discount);
    if (discount < 200) {
        console.log('apply');
    }
    else {
        console.log('dont apply');
    }
})();
