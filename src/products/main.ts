import { addProduct , calcStock , products } from "./product.service";


  addProduct({
    title:'producto 1',
    createdAt: new Date (1993,1,1),
    stock: 45,
    size: 'M',
  })


  addProduct({
    title:'producto 2',
    createdAt: new Date (1998,5,7),
    stock: 35,
    size: 'XL',
  })

  console.log(products);

  const total = calcStock();
console.log(total);
