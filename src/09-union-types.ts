(()=>{

  let userId: string | number;
  userId = 'asde';
  userId = 123;

  function gretting(myText: string | number){
    if(typeof myText === 'string'){
      // myText.toFixed(); ===> error porque esta seteado como string
      myText. toLocaleLowerCase();
    }else{
      //myText.toLowerCase(); ===> error porque esta seteado como number
      myText.toFixed();
    }
  }
  gretting('asas');
  gretting(1235);
})();
