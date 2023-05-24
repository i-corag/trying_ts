(()=>{
  const calcTotal = (prices: number[]) => {
    let total = 0;
    prices.forEach((item)=> {
    total += item
    });
    return total;
  }
  const rta = calcTotal([1,2,4,5]); //por inferencia asigna type number al rta
  console.log(rta);

  //asignar type explicito al retorno de la funcion
  const calcTotalV1 = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item)=> {
    total += item
     });
    // return total; ===> error porque la funcion debe retornar un string
    return total.toString();
  }
  const rta1 = calcTotalV1([1,2,4,5]);
  console.log(rta1);

  //funciones sin retorno, tipo VOID (funciones que llaman a otras funciones)
  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`El total el ${rta}`)
  }
  printTotal([1,5,67,8]); //tipo void, ejecuta algo pero no retorna nada

})();


