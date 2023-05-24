(()=>{

  //alias type
  type UserID = string | number;
  let userId: UserID;

  //literal types

  let shirtSize: 'S' | 'M' | 'L' | 'XL';
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 'jsaksjdlasd'; ====> error porque no esta dentro de lo especificado

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let pantSize: Sizes;
  pantSize = 'S';
  // pantSize = 'kakak'; ====> error porque no esta dentro de lo especificado


  function gretting( userId : UserID, size: Sizes) {
    if(typeof userId === 'string'){
      userId. toLocaleLowerCase();
    }else{
      userId.toFixed();
    }
  }

  gretting(1111, 'S')

})();
