function makeMessage (name, price) {
    const priceList = `You picked ${name}, price per item is ${price} credits`
    return priceList;
};
console.log(makeMessage('Radar', 6150));
