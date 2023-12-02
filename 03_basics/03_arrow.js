const user = {
    username : " Arvind",
    price : 999,

    welcomeMessage : function () {
        //  console.log(`${this.username}, welcome to the website`);
        // console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai() {
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "Arvind"
//     console.log(this);
// }
// chai()

// const chai = () => {
//     let username = "Arvind"
//     console.log(this);
// }
// chai()


// explicit return

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwoNumbers(3, 4));


//implicit return
// const addTwoNumbers = (num1, num2) =>  num1 + num2

// const addTwoNumbers = (num1, num2) =>  (num1 + num2)
// const addTwoNumbers = (num1, num2) =>  ({username: "Arvind"})

// console.log(addTwoNumbers(3, 4));

