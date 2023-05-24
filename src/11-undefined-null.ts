(()=>{
  // let myNumber:number = undefined; ==> error undefined is not a number
  // let myString:string = null; // error ==> null is not a string

  let myNull = null; //queda de tipo any
  let myUndefined = undefined; //queda de tipo any

  let onlyNull: null = null;
  let onlyUndefined: undefined = undefined;

  let myDinamicNumber: number | null = null;
  let myDinamicString: string | undefined = undefined;

  myDinamicNumber =12;
  myDinamicString = 'kakaka'

  function hi (name:string | null ){
    let hello ='Hola'
    if(name) {
      hello += ' name';
    } else{
      hello += ' nobody';
    }
    console.log(hello);
      }
  hi('Ivana');
  hi(null);


  function hiV1 (name:string | null ){
    let hello ='Hola'
    hello += name?.toLowerCase() || 'nobody'  //optional chaining
    console.log(hello);
  }
hiV1('Ivana');
hiV1(null);
})();
