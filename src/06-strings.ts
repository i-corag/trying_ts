(()=>{
  let productTitle = 'My product';
  let productDescription: string = 'My product description';

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  puede manejar multiple lineas
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `

  console.log(summary);
})();
