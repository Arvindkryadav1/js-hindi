

// function sayMyName() {
//     console.log("A");
//     console.log("R");
//     console.log("V");
//     console.log("I");
//     console.log("N");
//     console.log("D");
// }

// sayMyName()


// function addTwoNumbers(Number1, Number2) {
//     console.log(Number1 + Number2);
// }

function addTwoNumbers(Number1, Number2) {
    // let result = (Number1 + Number2);
    // return result
    
    return Number1 + Number2
}

//  addTwoNumbers(8, 9)

// console.log(addTwoNumbers(8, 9));

function loginUserMessage(userName = "Sam") {
    if (userName === undefined) {
        console.log("Please enter your username")
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Arvind"))
// console.log(loginUserMessage("Pushpa"))

function calculateCartPrice(val1, val2, ...num1){
 return num1
}

// console.log(calculateCartPrice(200, 300, 700, 900, 456))

const user = {
    username : "Arvind",
    price: 199
}

function handleObject (anyObject) {
   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

const newArr = [100, 200, 300, 400, 9000, 849]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArr))