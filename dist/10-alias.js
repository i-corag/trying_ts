"use strict";
(() => {
    let userId;
    //literal types
    let shirtSize;
    shirtSize = 'S';
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
    let pantSize;
    pantSize = 'S';
    // pantSize = 'kakak'; ====> error porque no esta dentro de lo especificado
    function gretting(userId, size) {
        if (typeof userId === 'string') {
            userId.toLocaleLowerCase();
        }
        else {
            userId.toFixed();
        }
    }
    gretting(1111, 'S');
})();
