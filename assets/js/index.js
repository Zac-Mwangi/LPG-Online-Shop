

price.addEventListener("click", () => {
    let priceValue = price.value;

    if(priceValue === "price"){
        priceValue.innerContent = item.price;
    }else{
        priceValue.innerContent = "price";
    }
})