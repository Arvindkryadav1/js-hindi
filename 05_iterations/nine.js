// Reduce

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, curVal) {
//     console.log(`acc: ${acc} & curVal ${curVal}`);
//     return acc + curVal
// }, 13)

const myTotal = myNums.reduce( (acc, curVal) =>{ return acc + curVal}, 13)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);