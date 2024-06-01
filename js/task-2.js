function checkStorage(available, ordered) {
  if(available<=ordered){
    console.log("Not enough goods in stock!");
  }else{
    console.log("Order is processed, our manager will contact you");
  }
}
console.log(checkStorage(100, 10));