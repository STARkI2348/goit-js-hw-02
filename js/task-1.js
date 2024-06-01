function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;
    if(totalPrice <= customerCredits){
        console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
    } else {
        console.log("Insufficient funds!")
    }
}
makeTransaction(5, 3000, 23000); // "You ordered 5 droids worth 15000 credits!"
makeTransaction(3, 1000, 15000); // "You ordered 3 droids worth 3000 credits!"
makeTransaction(10, 5000, 8000); // "Insufficient funds!"
makeTransaction(8, 2000, 10000); // "Insufficient funds!"
makeTransaction(10, 500, 5000); // "You ordered 10 droids worth 5000 credits!"