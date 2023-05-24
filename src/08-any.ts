//ayuda en momento de aprendisaje o migracion
//en el caso que una api envie un valor tipo any, se puede hacer un cast del mismo

(()=>{

let myDynamicVar: any; //cualquier cosa puede ir ahi. NO SE DEBE USAR
myDynamicVar = 45;
myDynamicVar = 'hola';
myDynamicVar = true;


//Cast1
myDynamicVar ='Hola';
const rta1 = (myDynamicVar as string).toLocaleLowerCase();
console.log(rta1)

//Cast2
myDynamicVar = 1212;
const rta2 = (<number>myDynamicVar).toFixed();
const rta3 =(<number>myDynamicVar).toLocaleLowerCase(); //error porque converti mi variable a numb
console.log(rta2)

})();

