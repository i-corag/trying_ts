(()=>{

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date, //no hay alert con Date
    stock: number,
    size: Sizes,
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    } //el retorno ya queda tipado
  }
  const product1 = createProductToJson('P1' , new Date(), 12, 'XL')
  console.log(product1)
  console.log(product1.title);


  const createProductToJsonV2 = (
    title: string,
    createdAt: Date, //no hay alert con Date
    stock: number,
    size?: Sizes, //la variable size puede venir incluida o no (ni no la envio la toma como undefined)
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    } //el retorno ya queda tipado
  }
  const product2 = createProductToJsonV2('P1' , new Date(), 12)
  console.log(product2)
  console.log(product2.title);

})();
