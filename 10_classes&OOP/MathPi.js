const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
//   Math.PI = 4
console.log(descriptor);

const chai = {
    name : "Ginger Chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nhi bani");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: false,
//     configurable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }
    
}