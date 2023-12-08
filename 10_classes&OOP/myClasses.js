//ES6

class User {
    constructor(username, email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    
    usernameCapitalized(){
        return `${this.username.toUpperCase()}`
    }
}


const chai = new User("arvind", "chai@chai.com", "12345")


console.log(chai.encryptPassword());
console.log(chai.username);
console.log(chai.usernameCapitalized());

//Behind the scene