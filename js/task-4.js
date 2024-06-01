function getShippingCost(country) {
    if (country == "China") {
        var price = 100;
        console.log(`Shipping to ${country} will cost ${price} credits`);
    
    }else if(country == "Chile") {
        var price = 250;
        console.log(`Shipping to ${country} will cost ${price} credits`);
    
    }else if(country == "Australia") {
        var price = 170;
        console.log(`Shipping to ${country} will cost ${price} credits`);
    
    }else if(country == "Jamaica") {
        var price = 120;
        console.log(`Shipping to ${country} will cost ${price} credits`);
    
    }else {
        console.log("Sorry, there is no delivery to your country");
    }
}
getShippingCost("Australia"); // "Shipping to Australia will cost 170 credits"
getShippingCost("Germany"); // "Sorry, there is no delivery to your country"
getShippingCost("China"); // "Shipping to China will cost 100 credits"
getShippingCost("Chile"); // "Shipping to Chile will cost 250 credits"
getShippingCost("Jamaica"); // "Shipping to Jamaica will cost 120 credits"
getShippingCost("Sweden"); // "Sorry, there is no delivery to your country"