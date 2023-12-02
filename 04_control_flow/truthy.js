// const userEmail = []

// if (userEmail) {
//     console.log("Have userEmail");
// }else{
//     // console.log("Don't have user Email");
// }

// // Falsy value

// // false, 0, BigInt 0n, "", null, undefined, Nan

// // truthy value

// // "0", "False", " ", [], {}, function (){},

// if (userEmail.length === 0) {
//     console.log("Email is empty");
// }

const emptyObject = {}

if (Object.keys(emptyObject.length === 0)) {
    console.log("Object is empty");
}

//Nullish coalescing operator (??)

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// console.log(val1);

// ternary operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("more than 80") : console.log("less than 80");
