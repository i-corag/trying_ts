(()=>{

  const login =(data:{email:string, password:number}) =>{
    console.log(data.email, data.password);
  }
  login({
    email: 'ivana@ivana.com',
    password: 1234
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];
  const addProduct = (data:{
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  }) =>{
    products.push(data)
  }

  addProduct({
    title:'producto 1',
    createdAt: new Date (),
    stock: 45,
    size: 'M',
  })

  console.log(products)

})();
