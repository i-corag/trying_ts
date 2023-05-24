(()=>{
let prices = [1,4,6,4,5,7,9]; //queda definido como un array de numeros
prices.push('hola'); // por lo tanto no puedo pushear otra cosa
prices.push(true);
prices.push({});
prices.push(123);

console.log(prices);

let array = [13 , 'hola' , true];
array.push(45);
array.push('chau');
array.push(false);

console.log(array);


//para hacer un array flexible

let flexibleArray: (number | string | boolean | object)[] = ['hola']
flexibleArray.push(true);
flexibleArray.push(89);
flexibleArray.push({});
flexibleArray.push([]);
//object te deja insertar no solo objetos sino tambien arrays

console.log(flexibleArray);

let numbers = [1, 2, 'as', 4, 5, 6, 7, 8];
numbers.map(item =>item *2);  //me salta error porque no puede multiplicar con un string
})();
