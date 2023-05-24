"use strict";
(() => {
    let userId;
    userId = 'asde';
    userId = 123;
    function gretting(myText) {
        if (typeof myText === 'string') {
            // myText.toFixed(); ===> error porque esta seteado como string
            myText.toLocaleLowerCase();
        }
        else {
            //myText.toLowerCase(); ===> error porque esta seteado como number
            myText.toFixed();
        }
    }
    gretting('asas');
    gretting(1235);
})();
