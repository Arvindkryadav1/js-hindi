// singleton


// object literals

const mySym = Symbol("Key1")

const jsUser = {
    name : "Arvind",
    "Full Name" : "Arvind Yadav",
    age : 28,
    location: "Ranchi",
    [mySym]: "key1",
    email : "arvind@kmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturady"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["email"]);
// console.log(jsUser["Full Name"]);
// console.log(jsUser[mySym]);

jsUser.email = "h@HashChangeEvent.com"
// Object.freeze(jsUser)
jsUser.email = "a@a.com"

// console.log(jsUser);
jsUser.greeting = function (){
    console.log(`Hello, Good morning ${this["Full Name"]}`);
}
console.log(jsUser.greeting);