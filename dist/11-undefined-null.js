"use strict";
(() => {
    // let myNumber:number = undefined; ==> error undefined is not a number
    // let myString:string = null; // error ==> null is not a string
    let myNull = null; //queda de tipo any
    let myUndefined = undefined; //queda de tipo any
    let onlyNull = null;
    let onlyUndefined = undefined;
    let myDinamicNumber = null;
    let myDinamicString = undefined;
    myDinamicNumber = 12;
    myDinamicString = 'kakaka';
    function hi(name) {
        let hello = 'Hola';
        if (name) {
            hello += ' name';
        }
        else {
            hello += ' nobody';
        }
        console.log(hello);
    }
    hi('Ivana');
    hi(null);
    function hiV1(name) {
        let hello = 'Hola';
        hello += (name === null || name === void 0 ? void 0 : name.toLowerCase()) || 'nobody'; //optional chaining
        console.log(hello);
    }
    hiV1('Ivana');
    hiV1(null);
})();
