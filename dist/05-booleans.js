"use strict";
(() => {
    let isEnable = true;
    let isNew = false;
    isNew = true;
    const random = Math.random();
    console.log('random', random);
    //isNew = random >= 0.5? 'true' : 'false'; //no puedo asignarle un string
    isNew = random <= 0.5;
    console.log('isNew', isNew);
})();
